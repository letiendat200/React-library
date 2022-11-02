import React,{useState} from 'react'
import {useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const {register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        let content = JSON.parse(JSON.stringify(data))
        localStorage.setItem("name",content.name)
        navigate('/meme')
    }
  return (
    <header className="App-header">
      <form class="form-register" onSubmit={handleSubmit(onSubmit)}>
                <div class="form-group">
                    <h3 class="theme-normal-1">Email</h3>
                    <input type="email" class="form-control" id="__BVID__77" name="email" />
                </div>
                <div class="form-group">
                    <h3 class="theme-normal-1">Password</h3>
                    <input type="password" class="form-control" id="__BVID__78" name="password" />
                </div>
                <div class="form-group">
                    <h3 class="theme-normal-1">Name</h3>
                    <input {...register("name")} type="name" class="form-control" id="__BVID__79" name="name" />
                </div>
                <div class="form-group button-submit-register mt-2">
                    <div class="row">                    
                        
                        <div class="d-flex align-items-end justify-content-between flex-column col-sm-6 col-12">
                            <button type="submit" class="Button">
                                <div>Sign up</div>
                            </button>
                        </div>
                    </div>
                </div>
        </form>
    </header>
  )
}