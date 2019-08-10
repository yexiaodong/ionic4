import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  userForm;
  constructor(private formBuilder: FormBuilder, private toastController: ToastController) {
    this.userForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit() {}
  async onSubmit(data) {
    console.warn('表单提交数据', data);
    const msg = '用户名称：' +  data.username + ',密码：' + data.password
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
