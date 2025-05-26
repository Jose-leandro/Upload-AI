import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterOutlet,
    // FormsModule,
    // SeparatorComponent,
    // VideoInputFormComponent,
    // PromptSelectComponent,
  ],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.scss',
})
export class AppComponent {
  temperature: number = 0.5;
  videoId: string | null = null;

  onTemperatureChange(event: Event) {
    const inputValue = parseFloat((event.target as HTMLInputElement).value);
    this.temperature = inputValue;
  }

  setVideoId(id: string | null): void {
    this.videoId = id;
  }

  input = '';
  completion = '';

  setInput(value: string) {
    this.input = value;
  }

  setTemperature(temp: number) {
    this.temperature = temp;
  }

  handleInputChange(event: any) {
    this.input = event?.target?.value;
  }

  SelectInput(prompt: string) {
    this.input = prompt;
  }

  // const {
  //   input,
  //   setInput,
  //   handleInputChange,
  //   handleSubmit,
  //   completion,
  //   isLoading,
  // } = useCompletion({
  //   api: "https://upload-ai-server-vakr.onrender.com/ai/complete",
  //   body: {
  //     videoId,
  //     temperature,
  //   },
  //   headers: {
  //     "Content-type": "application/json",
  //   }
  // });

  constructor(private apiService: ApiService) {}

  handleSubmit(event: Event) {
    event.preventDefault();
    this.apiService
      .completeRequest(this.videoId, this.temperature)
      .subscribe((response) => {});
  }
}
