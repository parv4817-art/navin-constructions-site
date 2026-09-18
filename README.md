# Navin Constructions Site

Build this website exactly from the HTML/CSS code below. Keep the structure and design, make it fully responsive, and make all navigation buttons work

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Navin Constructions | Infrastructure • Railways • Civil Works</title>

<meta name="description"
content="Navin Constructions — Construction, infrastructure, railway track maintenance and construction, civil works, power plant works, RMC plant execution, vehicles and logistics across Madhya Pradesh and Maharashtra.">

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    font-family:Arial, Helvetica, sans-serif;
    background:#f4f4f1;
    color:#151515;
    line-height:1.6;
}

a{
    text-decoration:none;
    color:inherit;
}

img{
    display:block;
    width:100%;
}

/* ================= NAVBAR ================= */

nav{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    z-index:1000;
    padding:20px 6%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:rgba(12,12,12,.94);
    backdrop-filter:blur(12px);
    color:white;
}

.logo{
    font-size:22px;
    font-weight:800;
    letter-spacing:2px;
}

.logo span{
    color:#999;
    font-weight:400;
}

.nav-links{
    display:flex;
    gap:30px;
    list-style:none;
    font-size:13px;
}

.nav-links a{
    color:#ddd;
    transition:.3s;
}

.nav-links a:hover{
    color:white;
}

.nav-contact{
    border:1px solid #777;
    padding:9px 17px;
}

/* ================= HERO ================= */

.hero{
    min-height:100vh;
    display:flex;
    align-items:center;
    padding:150px 7% 90px;
    color:white;

    background:
    linear-gradient(rgba(0,0,0,.67),rgba(0,0,0,.72)),
    url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=90")
    center/cover;
}

.hero-content{
    max-width:900px;
}

.eyebrow{
    text-transform:uppercase;
    letter-spacing:4px;
    font-size:12px;
    color:#c7c7c7;
    margin-bottom:25px;
}

.hero h1{
    font-size:clamp(55px,8vw,110px);
    line-height:.9;
    letter-spacing:-5px;
    margin-bottom:35px;
}

.hero h1 span{
    display:block;
    font-weight:300;
    color:#ccc;
}

.hero-description{
    max-width:700px;
    font-size:18px;
    color:#ddd;
    margin-bottom:38px;
}

.hero-buttons{
    display:flex;
    gap:15px;
    flex-wrap:wrap;
}

.btn{
    display:inline-block;
    padding:15px 27px;
    border:1px solid white;
    font-size:13px;
    transition:.3s;
}

.btn-primary{
    background:white;
    color:#111;
}

.btn:hover{
    transform:translateY(-3px);
}

/* ================= STATS ================= */

.stats{
    background:#171717;
    color:white;
    display:grid;
    grid-template-columns:repeat(4,1fr);
    padding:45px 7%;
    gap:30px;
}

.stat{
    border-left:1px solid #555;
    padding-left:25px;
}

.stat-number{
    font-size:40px;
    font-weight:700;
}

.stat-label{
    color:#999;
    font-size:11px;
    letter-spacing:1.5px;
    text-transform:uppercase;
}

/* ================= GENERAL ================= */

section{
    padding:110px 7%;
}

.section-label{
    text-transform:uppercase;
    letter-spacing:3px;
    font-size:11px;
    color:#777;
    margin-bottom:18px;
}

.section-title{
    font-size:clamp(38px,5vw,68px);
    line-height:1;
    letter-spacing:-2px;
    margin-bottom:30px;
}

.section-intro{
    max-width:720px;
    color:#666;
    font-size:17px;
}

/* ================= ABOUT ================= */

.about{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:80px;
    align-items:center;
}

.about-image{
    height:600px;
    background:
    linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.2)),
    url("https://images.unsplash.com/photo-1590644365607-1c5a7f0b7c72?auto=format&fit=crop&w=1400&q=85")
    center/cover;
}

.about-text p{
    color:#555;
    margin-bottom:20px;
}

.owner-box{
    margin-top:35px;
    padding:25px;
    background:white;
    border-left:3px solid #151515;
}

.owner-box strong{
    display:block;
    font-size:19px;
}

.owner-box span{
    color:#777;
    font-size:13px;
}

/* ================= CAPABILITIES ================= */

.capabilities{
    background:#e8e8e4;
}

.capability-grid{
    margin-top:60px;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:1px;
    background:#bbb;
}

.capability{
    min-height:230px;
    padding:35px;
    background:#e8e8e4;
    transition:.35s;
}

.capability:hover{
    background:#171717;
    color:white;
}

.capability-number{
    font-size:11px;
    color:#888;
    margin-bottom:35px;
}

.capability h3{
    font-size:21px;
    margin-bottom:12px;
}

.capability p{
    color:#777;
    font-size:14px;
}

.capability:hover p{
    color:#bbb;
}

/* ================= PROJECTS ================= */

.projects{
    background:#f4f4f1;
}

.projects-grid{
    margin-top:55px;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:20px;
}

.project{
    position:relative;
    height:390px;
    overflow:hidden;
    background:#d8d8d4;
}

.project img{
    height:100%;
    object-fit:cover;
    transition:.5s;
}

.project:hover img{
    transform:scale(1.05);
}

.project-overlay{
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    padding:35px 25px;
    color:white;
    background:linear-gradient(transparent,rgba(0,0,0,.9));
}

.project-overlay small{
    text-transform:uppercase;
    letter-spacing:2px;
    font-size:9px;
}

.project-overlay h3{
    font-size:22px;
    margin-top:5px;
}

/* ================= EQUIPMENT ================= */

.equipment{
    background:#171717;
    color:white;
}

.equipment .section-label{
    color:#999;
}

.equipment .section-intro{
    color:#aaa;
}

.equipment-grid{
    margin-top:55px;
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:1px;
    background:#444;
}

.equipment-item{
    padding:30px;
    background:#171717;
    min-height:150px;
}

.equipment-item h3{
    font-size:17px;
    margin-bottom:8px;
}

.equipment-item p{
    color:#999;
    font-size:13px;
}

/* ================= TEAM ================= */

.team{
    background:#eeeeeb;
}

.team-grid{
    margin-top:55px;
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:20px;
}

.team-card{
    background:white;
    overflow:hidden;
}

.team-photo{
    height:330px;
    background:#d6d6d2;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    overflow:hidden;
}

.team-photo img{
    width:100%;
    height:100%;
    object-fit:cover;
}

.photo-placeholder{
    text-align:center;
    color:#888;
    font-size:12px;
    letter-spacing:1px;
    text-transform:uppercase;
}

.team-info{
    padding:22px;
}

.team-info h3{
    font-size:19px;
    margin-bottom:3px;
}

.team-role{
    font-size:12px;
    color:#777;
    text-transform:uppercase;
    letter-spacing:1px;
}

.team-phone{
    margin-top:13px;
    font-size:13px;
    color:#333;
}

/* Site supervisor wider card */

.supervisors{
    margin-top:25px;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:20px;
}

.supervisor-card{
    background:white;
    min-height:370px;
}

.supervisor-photo{
    height:270px;
    background:#d6d6d2;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#888;
    text-transform:uppercase;
    letter-spacing:1px;
    font-size:11px;
}

.supervisor-info{
    padding:20px;
}

.supervisor-info h3{
    font-size:17px;
}

.supervisor-info p{
    font-size:12px;
    color:#777;
}

/* ================= CONTACT ================= */

.contact{
    background:#111;
    color:white;
}

.contact-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:80px;
}

.contact .section-label{
    color:#888;
}

.contact .section-title{
    max-width:650px;
}

.contact-text{
    color:#aaa;
    max-width:600px;
    margin-bottom:35px;
}

.contact-details{
    display:grid;
    gap:18px;
}

.contact-detail{
    padding:20px 0;
    border-bottom:1px solid #333;
}

.contact-detail span{
    display:block;
    font-size:10px;
    text-transform:uppercase;
    letter-spacing:2px;
    color:#777;
    margin-bottom:5px;
}

.contact-detail strong{
    font-size:17px;
}

.map-box{
    min-height:450px;
    background:#222;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    padding:30px;
}

.map-box a{
    border:1px solid #777;
    padding:15px 25px;
    color:white;
}

/* ================= FOOTER ================= */

footer{
    background:#080808;
    color:#777;
    padding:35px 7%;
    display:flex;
    justify-content:space-between;
    gap:20px;
    font-size:12px;
}

/* ================= RESPONSIVE ================= */

@media(max-width:900px){

    .nav-links{
        display:none;
    }

    .stats{
        grid-template-columns:repeat(2,1fr);
    }

    .about,
    .contact-grid{
        grid-template-columns:1fr;
    }

    .capability-grid,
    .projects-grid{
        grid-template-columns:1fr 1fr;
    }

    .equipment-grid{
        grid-template-columns:1fr 1fr;
    }

    .team-grid{
        grid-template-columns:1fr 1fr;
    }

    .supervisors{
        grid-template-columns:1fr 1fr;
    }
}

@media(max-width:600px){

    nav{
        padding:17px 5%;
    }

    .logo{
        font-size:18px;
    }

    .hero{
        padding:130px 6% 70px;
    }

    .hero h1{
        font-size:55px;
        letter-spacing:-3px;
    }

    .hero-description{
        font-size:16px;
    }

    section{
        padding:80px 6%;
    }

    .stats{
        grid-template-columns:1fr 1fr;
        padding:35px 6%;
    }

    .stat-number{
        font-size:30px;
    }

    .capability-grid,
    .projects-grid,
    .equipment-grid,
    .team-grid,
    .supervisors{
        grid-template-columns:1fr;
    }

    .about-image{
        height:400px;
    }

    footer{
        flex-direction:column;
    }
}









    


        NAVIN CONSTRUCTIONS
    



    


        

About


        

Capabilities


        

Projects


        

Equipment


        

Team


        


            
                Contact
            
        


    









    



        


            Established 2017 • Madhya Pradesh & Maharashtra
        



        


            NAVIN
            CONSTRUCTIONS
        



        


            Construction & Infrastructure
            across Railways, Roads, Civil Works,
            Power Plants, RMC Plant Execution,
            Vehicles & Logistics.
        



        



            
                Explore Our Work
            

            
                Contact Us
            

        



    











    


        

2017


        

Established


    



    


        

150+


        

Projects Completed


    



    


        

2


        

States Served


    



    


        

5+


        

Civil Engineers


    











    



        



        



            


                About Navin Constructions
            



            


                Building the infrastructure behind progress.
            



            


                Established in 2017, Navin Constructions is a
                construction and infrastructure company based in
                Sarni, Betul, Madhya Pradesh.
            



            


                The company undertakes a diverse range of
                construction and infrastructure works across
                Madhya Pradesh and Maharashtra, with experience
                in railway works, roads, civil construction,
                power plant works, RMC plant execution,
                vehicles and logistics, and allied infrastructure
                activities.
            



            


                With a team of experienced civil engineers,
                site supervisors, operators and field personnel,
                Navin Constructions combines technical capability
                with on-ground execution.
            



            



                Navin Shivhare

                
                    Founder & Owner
                

            



        



    











    


        What We Do
    



    


        Our Capabilities
    



    


        A broad range of construction, infrastructure,
        industrial and logistics capabilities supported by
        experienced teams and construction equipment.
    




    



        


            

01


            

Railway Track Maintenance & Construction


            


                Railway track maintenance, construction and
                associated infrastructure works.
            


        



        


            

02


            

Road Construction


            


                Road construction, development and allied
                infrastructure works.
            


        



        


            

03


            

Civil Works


            


                Civil construction and engineering works across
                different project requirements.
            


        



        


            

04


            

Power Plant Works


            


                Civil and allied works associated with
                power plant environments.
            


        



        


            

05


            

RMC Plant Execution


            


                Ready-mix concrete plant execution and
                associated operations.
            


        



        


            

06


            

Vehicles & Logistics


            


                Vehicle deployment, transportation and
                construction-related logistics.
            


        



        


            

07


            

Building Construction


            


                Building and structural construction works.
            


        



        


            

08


            

Industrial Works


            


                Construction and civil works in industrial
                environments.
            


        



        


            

09


            

Allied Infrastructure Works


            


                Additional civil and infrastructure services
                according to project requirements.
            


        



    











    


        Selected Work
    



    


        Our Projects
    



    


        A selection of projects undertaken by Navin Constructions.
        Real project photographs and project details will be added
        to this section.
    




    



        

        



            

            


                Railway Infrastructure
                

Project Gallery


            



        




        



            

            


                Civil Construction
                

Project Gallery


            



        




        



            

            


                Infrastructure
                

Project Gallery


            



        




        



            

            


                Road Works
                

Project Gallery


            



        




        



            

            


                Industrial Works
                

Project Gallery


            



        




        



            

            


                Equipment & Execution
                

Project Gallery


            



        



    











    


        Resources
    



    


        Equipment & Resources
    



    


        Navin Constructions maintains a range of civil
        construction equipment, machinery and transportation
        resources to support project execution.
    




    



        


            

Construction Machinery


            


                Civil construction equipment and machinery.
            


        



        


            

Earthmoving Equipment


            


                Equipment supporting excavation and site works.
            


        



        


            

Vehicles


            


                Company vehicles supporting project operations.
            


        



        


            

RMC / Batching Infrastructure


            


                Resources supporting RMC plant execution.
            


        



    











    


        Our People
    



    


        The Team Behind the Work
    



    


        A dedicated team supporting engineering, operations,
        logistics and on-site execution.
    




    




        

        



            



                
                


                    Founder Photo
                



            



            



                

Navin Shivhare



                


                    Founder & Owner
                



                


                    +91 94250 03749
                



            



        




        

        



            



                
                


                    Co-Founder Photo
                



            



            



                

Parv Shivhare



                


                    Co-Founder
                



                


                    +91 74709 33749
                



            



        




        

        



            



                
                


                    Operator Photo
                



            



            



                

Prateek



                


                    Computer Operator
                



            



        




        

        



            



                
                


                    Logistics Photo
                



            



            



                

Subhash



                


                    Logistics Monitor
                



            



        



    




    

    



        


            Site Operations
        



        


            Site Supervisors
        



        


            Our site supervision team supports day-to-day
            project execution and on-ground coordination.
        




        



            

            



                


                    Site Supervisor Photo
                



                



                    

Site Supervisor



                    


                        Name & details to be added
                    



                



            




            

            



                


                    Site Supervisor Photo
                



                



                    

Site Supervisor



                    


                        Name & details to be added
                    



                



            




            

            



                


                    Site Supervisor Photo
                



                



                    

Site Supervisor



                    


                        Name & details to be added
                    



                



            



        



    











    



        



            


                Get In Touch
            



            


                Let's build what comes next.
            



            


                Contact Navin Constructions for construction,
                infrastructure, railway, civil, industrial,
                RMC and logistics-related requirements.
            




            



                



                    Founder & Owner

                    
                        Navin Shivhare
                    

                    


                        +91 94250 03749
                    



                




                



                    Co-Founder

                    
                        Parv Shivhare
                    

                    


                        +91 74709 33749
                    



                




                



                    Head Office

                    
                        Sarni, Betul, Madhya Pradesh
                    

                




                



                    Operations

                    
                        Madhya Pradesh & Maharashtra
                    

                



            



        




        

        



            



                


                    HEAD OFFICE
                



                


                    Sarni, Betul
                



                
                    Open Location in Google Maps
                

            



        



    











    


        © 2026 Navin Constructions. All rights reserved.
    



    


        Construction • Infrastructure • Railways • Civil Works

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/850e388d-d3fd-440c-a636-b77e29649bc6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
