import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss',
})
export class CategoriaComponent {
  camposForm!: FormGroup;

  constructor() {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
    });
  }

  salvar() {
    this.camposForm.markAllAsTouched(); // Marca todos os campos como tocados para exibir mensagens de erro

    if (this.camposForm.valid) {
      console.log('valores digitados:', this.camposForm.value);
    }
  }

  isCampoInvalido(nomeCampo: string): boolean {
    const campo = this.camposForm.get(nomeCampo); // Obtém o controle do campo pelo nome
    return campo ? campo.invalid && campo.touched : false; // Verifica se o campo é inválido e foi tocado
  }
}
