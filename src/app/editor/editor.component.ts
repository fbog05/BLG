import { Component } from '@angular/core';
import * as monaco from 'monaco-editor';
import loader from '@monaco-editor/loader';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {
  isLanguageDropdownOpen: boolean = false;


  editorOptions = {theme: 'vs-dark', language: 'python', automaticLayout: true, scrollBeyondLastLine: false, minimap: {enabled: false}};
  code: string= 'print("Hello World!")';

  toggleLanguageDropdown() {
    this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
  }

  closeLanguageDropdown(){
    this.isLanguageDropdownOpen = false;
  }

  changeLanguage(language: string) {
    this.editorOptions = { ...this.editorOptions, language };
  }
}
