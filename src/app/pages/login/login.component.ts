import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
   ngOnInit(): void {
   } 

   saveCall(){
    let data: any = this.loginForm.value;
    this.router.navigate(['./dashboard'],{
      queryParams:{data:JSON.stringify(data)}
    })
   }

   
   // credentials={
   //   user:'',
   //   password:''
   // }
   
  // credentials:any={
  //   userid:'',
  //   password:''
  // }

  loginForm:any={
    userid:'',
    password:''
  };

  constructor(private router: Router, private route: ActivatedRoute ){   
    this.loginForm = new FormGroup(
      {
        userid: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*&])(?!.* ).{8,20}') ])
        
      }
    )
  }

  

    // onSubmit(item:any){
    //   console.warn(item);
    //   //window.location.href="/dashboard";
    // }
    
    

  // loginForm = new FormGroup({
  //   userid: new FormControl('',[Validators.required,Validators.email]),
  //   password: new FormControl('',[Validators.required,
  //     Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*&])(?!.* ).{8,20}')
  //   ])
  // })
  // password show/hide
  hide=true;

  // to show please enter valid email 
  get userid(){
    return this.loginForm.get('userid');
  }

  // to show please enter valid password
  get password(){
    return this.loginForm.get('password');
  }


}
