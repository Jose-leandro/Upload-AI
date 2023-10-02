import { FileVideo, Upload } from "lucide-react";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ChangeEvent, FormEvent, useMemo, useRef, useState } from "react";
import { getFFmpeg } from "@/lib/ffmpeg";
import { fetchFile } from "@ffmpeg/util";
import { api } from "@/lib/axios";

type Status = "waiting" | "converting" | "uploading" | "generating" | "success";

const statusMessage = {
    converting: "Convertendo...",
    generating: "Transcrevendo...",
    uploading: "Carregando",
    success: "Sucesso!"
};

interface VideoInputFormProps {
    onVideoUploaded: (id: string) => void;
}

export function VideoInputForm(props: VideoInputFormProps) {

    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [status, setStatus] = useState<Status>("waiting");

    const promptInputRef = useRef<HTMLTextAreaElement>(null);

    function handleFileSelected(event: ChangeEvent<HTMLInputElement>): void {
        const { files } = event.currentTarget;

        if (!files) {
            return
        };

        const selectedFile = files[0];

        setVideoFile(selectedFile);
    };

    async function convertVideoToAudio(video: File) {
        console.log("Convert started")

        const ffmpeg = await getFFmpeg();

        await ffmpeg.writeFile("input.mp4", await fetchFile(video));

        //  Caso encontre erros durante a conversão para MP3, utilize esta linha de código
        // ffmpeg.on("log", log => {
        //     console.log(log)
        // })

        ffmpeg.on("progress", progress => {
            console.log("Convert progress: " + Math.round(progress.progress * 100));
        });

        await ffmpeg.exec([
            "-i",
            "input.mp4",
            "-map",
            "0:a",
            "-b:a",
            "20k",
            "-acodec",
            "libmp3lame",
            "output.mp3"
        ]);

        const data = await ffmpeg.readFile("output.mp3");

        const audioFileBlob = new Blob([data], { type: "audio/mpeg" });
        const audioFile = new File([audioFileBlob], "output.mp3", {
            type: "audio/mpeg",
        });

        console.log("Covert finished.");

        return audioFile
    };

    async function handleuploadVideo(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const prompt = promptInputRef.current?.value;

        if (!videoFile) {
            return
        };

        setStatus("converting");

        const audioFile = await convertVideoToAudio(videoFile);

        console.log(audioFile);

        const data = new FormData();

        data.append("file", audioFile);

        setStatus("uploading");

        const response = await api.post("/videos", data);

        console.log(response.data);

        const videoId = response.data.video.id;

        setStatus("generating");

        await api.post(`/videos/${videoId}/transcription`, {
            prompt,
        });

        setStatus("success");

        props.onVideoUploaded(videoId);
    }

    const previewURL = useMemo(() => {
        if (!videoFile) {
            return null
        };

        return URL.createObjectURL(videoFile);
    }, [videoFile]);

    return (
        <form onSubmit={handleuploadVideo} className="space-y-6">
            <label
                htmlFor="video"
                className="relative border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
                {previewURL ?
                    (
                        <video src={previewURL} controls={false} className="pointer-events-none absolute inset-0"></video>
                    )
                    :
                    (
                        <>
                            <FileVideo className="w-4 h-4" />
                            Selecione um video
                        </>
                    )};
            </label>

            <input type="file" id="video" accept="video/mp4" className="sr-only" onChange={handleFileSelected} />

            <Separator />
            <div className="space-y-2">
                <Label htmlFor="transcription_prompt">Prompt de transcrição</Label>
                <Textarea
                    ref={promptInputRef}
                    disabled={status !== "waiting"}
                    id="transcription_prompt"
                    className="h-20 leading-relaxed resize-none"
                    placeholder="Inclua plavras-chaves mencionadas no video separadas por vírgula (,)"
                />
                <Button
                    data-success={status === "success"}
                    disabled={status !== "waiting"}
                    type="submit"
                    className="w-full data-[success=true]:bg-emerald-400"
                >
                    {
                        status === "waiting" ? (
                            <>
                                Carregar video
                                <Upload className="w-4 h-4 ml-2" />
                            </>
                        ) : statusMessage[status]}
                </Button>
            </div>
        </form >
    );
};