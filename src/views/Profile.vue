<template>
 


    <section>
             
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column">
              <div class="mt-8 card card-plain">
                <div class="pb-0 card-header text-start">
                  <img class="logo" src="../assets/img/Hobbiton.png" alt="">
                  <h1>Welcome back</h1>

                  
                </div>
                <div class="card-body">
                
              
                  <button v-on:click="addInsuranceCompany()" type="button" class="btn btn-danger btn-lg btn-block">Create insuarance company</button>
                  <button v-on:click="viewInsuranceCompanies()" type="button" class="btn btn-dark btn-lg btn-block">View all insurance companies</button>

          
                </div>
               
              </div>
            </div>
            
          </div>
        </div>

    </section>


  
</template>

<script>



import bgImg from "@/assets/img/curved-images/curved9.jpg"
const body = document.getElementsByTagName("body")[0];

export default {
  name: "SigninPage",
  components: {
   
 
  },
  
  data() {
    return {
      bgImg
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
     addInsuranceCompany(){
      (this.$router.push('/Tables'))
    
    },
     viewInsuranceCompanies(){
      (this.$router.push('/viewCompanies'))
     }
  
  },
};
</script>

<style>
 
  
  .logo{
    height: 100px;
  }
  body{
    align-items: center;
   
    }
</style>
