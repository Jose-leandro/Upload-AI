import { Component } from '@angular/core';
import { SeparatorComponent } from '../components/ui/separator/separator.component';
import { VideoInputFormComponent } from '../components/video-input-form/video-input-form.component';
import { PromptSelectComponent } from '../components/prompt-select/prompt-select.component';
import { SliderComponent } from '../components/ui/slider/slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SeparatorComponent,
    VideoInputFormComponent,
    PromptSelectComponent,
    SliderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  temperature: number = 0.5;
  videoId: string | null = null;

  onThumbMouseDown() {}

  onThumbKeyDown()  {
    
  }

  onTemperatureChange(event: Event) {
    const inputValue = parseFloat((event.target as HTMLInputElement).value);
    this.temperature = inputValue;
  }

  setVideoId(id: any | null): void {
    this.videoId = id;
  }

  isLoading = '';
  input = '';
  completion = '';
  transcription = '';

  handleSubmit() {}

  setInput(value: any) {
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

  // constructor(private apiService: ApiService) {}

  // // handleSubmit(event: Event) {
  // //   event.preventDefault();
  // //   this.apiService
  // //     .completeRequest(this.videoId, this.temperature)
  // //     .subscribe((response) => {});
  // // }
}
