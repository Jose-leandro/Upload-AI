// // import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

// // interface Prompt {
// //   id: string;
// //   title: string;
// //   template: string;
// // }

// // @Component({
// //   standalone: true,
// //   selector: 'prompt-select',
// //   templateUrl: './prompt-select.component.html',
// //   styleUrls: ['./pompt-select.component.scss'],
// // })
// // export class PromptSelectComponent implements OnInit {
// //   @Output() promptSelected = new EventEmitter<string>();
// //   prompts: Prompt[] | null = null;

// //   constructor(private http: HttpClient) {}

// //   ngOnInit(): void {
// //     this.loadPrompts();
// //   }

// //   loadPrompts(): void {
// //     this.http.get<Prompt[]>('/api/prompts').subscribe((response) => {
// //       console.log(response);
// //       this.prompts = response;
// //     });
// //   }

// //   handlePromptSelected(promptId: string): void {
// //     const selectedPrompt = this.prompts?.find(
// //       (prompt) => prompt.id === promptId
// //     );
// //     if (selectedPrompt) {
// //       this.promptSelected.emit(selectedPrompt.template);
// //     }
// //   }
// // }
