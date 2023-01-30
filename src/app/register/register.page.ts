import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  documentTypes = [
    {
      label: "Tarjeta de identidad",
      value: 'TI'
    },
    {
      label: "Cédula",
      value: 'cc'
    },
    {
      label: "Cédula de extranjería",
      value: 'CE'
    },
    {
      label: "Registro civil",
      value: 'RC'
    },
    {
      label: "Pasaporte",
      value: 'PS'
    },
  ]
  careers = [
    {
      label: "Ingenieria de sistemas",
      value: "sistemas"
    },
    {
      label: "Ingenieria Electronica",
      value: "Electronica"
    },
    {
      label: "Ingenieria industrial",
      value: "industrial"
    },
    {
      label: "Administracion de empresas",
      value: "empresas"
    },
    {
      label: "Administración Logística",
      value: "Logística"
    }

  ]
  constructor(private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private authenticate: AuthenticateService,
    private alertController: AlertController
  ) {

    this.registerForm = this.formBuilder.group({
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
        ])
      ),
      last_name: new FormControl("",
        Validators.compose([
          Validators.required
        ])),
      document_type: new FormControl("",
        Validators.compose([
          Validators.required,
        ])),
      document_number: new FormControl("",
        Validators.compose([
          Validators.required,


        ])),
      career: new FormControl("",
        Validators.compose([
          Validators.required
        ])),
      email: new FormControl("",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")

        ])),
      password: new FormControl("",
        Validators.compose([
          Validators.required
        ]))
    });
  }

  ngOnInit() {
  }

  goToLogin() {
    this.navCtrl.navigateBack("/login");
  }

  registerUser(register_form: any) {
    console.log(register_form)
    this.authenticate.registerUser(register_form).then(() => {
      this.navCtrl.navigateForward("/login");
    }).catch(err => {
      this.presentAlert("Opps", "Hubo un error", err);
    });
  }
  async presentAlert(header: any, subHeader: any, message: any) {
    const alert = await this.alertController.create(
      {
        header: header,
        subHeader: subHeader,
        message: message,
        buttons: ['Ok']
      }
    );
    await alert.present();
  }


}