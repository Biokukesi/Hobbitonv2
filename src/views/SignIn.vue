<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar
          is-blur="blur blur-rounded my-3 py-2 start-0 end-0 mx-4 shadow"
          btn-background="bg-gradient-success"
          :dark-mode="true"
        />
      </div>
    </div>
  </div>
  <main class="mt-0 main-content main-content-bg">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column">
              <div class="mt-8 card card-plain">
                <div class="pb-0 card-header text-start">
                  <h3 class="font-weight-lighter text-info text-gradient">Enter your details to login</h3>
                  
                </div>
                <div class="card-body">
                  
                  <FormKit
                    name="email"
                    label="Email address"
                    validation="required|email"
                    v-model="email"
                    placeholder="example@gmail.com"
                  />
                  <FormKit
                    placeholder="***********"
                    type="password"
                    name="password"
                    label="Password"
                    validation="required"
                    v-model="password"
                  />
                  <button v-on:click="logIn()" type="button" class="btn btn-dark btn-lg btn-block">Sign in</button>
                </div>
               
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  </main>

</template>

<script>
import axios from 'axios'
import Navbar from "@/examples/PageLayout/Navbar.vue";

import bgImg from "@/assets/img/curved-images/curved9.jpg"




const body = document.getElementsByTagName("body")[0];

export default {
  
  name: "SigninPage",
  components: {
    Navbar,
  
 
  },
  data() {
    return {
      bgImg,
      email: '',
      password: ''

    }
  },
  beforeMount() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
 
  methods: {
    async logIn(){
      let result = await axios.post(`https://gar-test.hobbiton.tech/login`,
      
      {
      
      password: this.password,
      email: this.email})
      if(result.status == 200){
        (this.$router.push('/Profile'))
      }
     
    
    
      
     
     
    }
  
    

},

};
</script>
