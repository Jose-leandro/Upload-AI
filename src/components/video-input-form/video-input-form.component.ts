import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { SeparatorComponent } from '../ui/separator/separator.component';
// import { HttpClient } from '@angular/common/http';
// import { getFFmpeg } from '../../lib/ffmpeg';
// import { fetchFile } from '@ffmpeg/util';

// type Status = 'waiting' | 'converting' | 'uploading' | 'generating' | 'success';

// interface VideoResponse {
//   video: {
//     id: string;
//   };
// }

// const statusMessage = {
//   converting: 'Convertendo...',
//   generating: 'Transcrevendo...',
//   uploading: 'Carregando',
//   success: 'Sucesso!',
// };

@Component({
  standalone: true,
  selector: 'app-video-input-form',
  templateUrl: './video-input-form.component.html',
  styleUrls: ['./video-input-form.component.scss'],
  imports: [CommonModule, SeparatorComponent],
})
export class VideoInputFormComponent {
  previewURL = '';
  //   @Output() videoUploaded = new EventEmitter<string>();
  //   videoFile: File | null = null;
  status: any = 'waiting';
  statusMessage = '';
  //   promptInput: string = '';
  //   constructor(private http: HttpClient) {}
  //   handleFileSelected(event: Event): void {
  //     const input = event.target as HTMLInputElement;
  //     const files = input.files;
  //     if (files && files.length > 0) {
  //       this.videoFile = files[0];
  //     }
  //   }
  //   async convertVideoToAudio(video: File): Promise<File> {
  //     console.log('Convert started');
  //     const ffmpeg = await getFFmpeg();
  //     const arrayBuffer = await fetchFile(video);
  //     const uint8Array = new Uint8Array(arrayBuffer);
  //     await ffmpeg.writeFile('input.mp4', uint8Array);
  // ffmpeg.on('progress', (progress: { progress: number }) => {
  //   console.log('Convert progress: ' + Math.round(progress.progress * 100));
  // });
  // await ffmpeg.exec([
  //   '-i',
  //   'input.mp4',
  //   '-map',
  //   '0:a',
  //   '-b:a',
  //   '20k',
  //   '-acodec',
  //   'libmp3lame',
  //   'output.mp3',
  // ]);
  //     const data = await ffmpeg.readFile('output.mp3');
  //     const audioFileBlob = new Blob([data], { type: 'audio/mpeg' });
  //     return new File([audioFileBlob], 'output.mp3', { type: 'audio/mpeg' });
  //   }
  //   async handleUploadVideo(event: Event): Promise<void> {
  //     event.preventDefault();
  //     if (!this.videoFile) {
  //       return;
  //     }
  //     this.status = 'converting';
  //     const audioFile = await this.convertVideoToAudio(this.videoFile);
  //     const formData = new FormData();
  //     formData.append('file', audioFile);
  //     this.status = 'uploading';
  //     const response = await this.http.post('/api/videos', formData).toPromise(); // Adjust API URL accordingly
  //     const videoId = (response as VideoResponse)!['video'].id;
  //     this.status = 'generating';
  //     await this.http
  //       .post(`/api/videos/${videoId}/transcription`, {
  //         prompt: this.promptInput,
  //       })
  //       .toPromise();
  //     this.status = 'success';
  //     this.videoUploaded.emit(videoId);
  //   }
}
