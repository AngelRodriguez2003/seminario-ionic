import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slideOpt = {
    initialSlide: 0,
    slidePerView: 1,
    centerSlides: true,
    speed: 400,

  }
  slides = [
    {
      title: 'PADRE RICO, PADRE POBRE',
      subtitle: 'Robert T Kiyosaki',
      img: "https://panamericana.vtexassets.com/arquivos/ids/272725-800-auto?v=636403058688000000&width=800&height=auto&aspect=true",
      description: "Padre rico, padre pobre es el punto de partida para quien quiera tomar el control de su futuro financiero",
    },
    {
      title: 'EL MÉTODO LEAN STARTUP',
      subtitle: 'Eric Ries',
      img: "https://panamericana.vtexassets.com/arquivos/ids/267088-800-auto?v=636385058351800000&width=800&height=auto&aspect=true",
      description: '«El método Lean Startup es el libro cuyas lecciones quiero que absorban y apliquen todos los emprendedores. No conozco una guía mejor para incrementar las probabilidades de éxito de una startup». Mitchell Kapor, fundador de Lotus Developmerit Corp'
    }, {
      title: 'LOS SECRETOS DE LA MENTE MILLONARIA',
      subtitle: 'T. Harv Eker',
      img: "https://panamericana.vtexassets.com/arquivos/ids/172784-800-auto?v=636209504364800000&width=800&height=auto&aspect=true",
      description: "Todos tenemos un patrón personal del dinero arraigado en nuestro subconsciente. Es este patrón, más que cualquier otra cosa, lo que determinará nuestra vida financiera. ",
    },
    {
      title: 'LOS JUEGOS DEL HAMBRE',
      subtitle: 'Suzanne Collins',
      img: "https://panamericana.vtexassets.com/arquivos/ids/416225-800-auto?v=637722693555770000&width=800&height=auto&aspect=true",
      description: "En una oscura versión del futuro próximo, doce chicos y doce chicas se ven obligados a participar en un reality show llamado “Los juegos del hambre”. Solo hay una regla: matar o morir. ",
    },
  ]
  constructor(private router: Router, private storage: Storage) { }
  finish() {
    this.router.navigateByUrl('/menu/home')
    this.storage.set("isIntroShowed", true);
  }
  ngOnInit() {
  }

}
