import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss',
})
export class CategoriaComponent {
  camposForm!: FormGroup;

  constructor(private service: CategoriaService) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
    });
  }

  salvar() {
    this.camposForm.markAllAsTouched(); // Marca todos os campos como tocados para exibir mensagens de erro

    if (this.camposForm.valid) {
      this.service.salvar(this.camposForm.value).subscribe({
        next: (categoria) => {
          console.log('Categoria salva com sucesso:', categoria);
          this.camposForm.reset(); // Reseta o formulário após salvar com sucesso
        },
        error: (err) => console.error('Erro ao salvar categoria:', err),
      });
    }
  }

  isCampoInvalido(nomeCampo: string): boolean {
    const campo = this.camposForm.get(nomeCampo); // Obtém o controle do campo pelo nome
    return campo ? campo.invalid && campo.touched : false; // Verifica se o campo é inválido e foi tocado
  }
}
