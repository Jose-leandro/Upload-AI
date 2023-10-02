import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { api } from "@/lib/axios";

interface Prompt {
    id: string
    title: string
    template: string
};

interface PromptSelectProps {

    onPromptSelected: (template: string) => void;
}

export function PromptSelect(props: PromptSelectProps) {

    const [prompts, setPrompts] = useState<Prompt[] | null>(null);

    useEffect(() => {
        api.get("/prompts").then(response => {

            console.log(response.data);
            setPrompts(response.data);
        });
    }, []);

    function handlePromptSelected(prompId: string) {
        const selectedPrompt = prompts?.find(prompt => prompt.id === prompId);

        if (!selectedPrompt) {
            return
        };

        props.onPromptSelected(selectedPrompt.template);
    }

    return (
        <Select onValueChange={handlePromptSelected}>
            <SelectTrigger>
                <SelectValue placeholder="Selecione um prompt..." />
            </SelectTrigger>
            <SelectContent>
                {prompts?.map(prompt => {
                    return (
                        <SelectItem key={prompt.id} value={prompt.id}> {prompt.title} </SelectItem>
                    );
                })};
            </SelectContent>
        </Select>
    );
};


