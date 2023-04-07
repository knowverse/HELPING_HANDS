function Render(obj,head){
    var content=``;
    var image="";
    var fa=[],st=[];
    obj.forEach((i)=>{
        if(i[5]=="FACULTY"){
            fa.push(i);
        }
        else if(i[5]=="STUDENT"){
            st.push(i);
        }
    });
    var content=`<section class="navigation fixed-top">
<div class="nav-container ">
    <div class="brand">
        <a href="#!"> Helping Hands</a>
    </div>
    <nav>
        <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
        <ul class="nav-list">
            <li>
                <a href="#!">Home</a>
            </li>
            <li>
                <a href="#!">Gallery</a>
            </li>
            <!-- <li>
            <a href="#!">Services</a>
            <ul class="nav-dropdown">
              <li>
                <a href="#!">Web Design</a>
              </li>
              <li>
                <a href="#!">Web Development</a>
              </li>
              <li>
                <a href="#!">Graphic Design</a>
              </li>
            </ul>
          </li> -->
            <li>
                <a href="#!">Donate Us</a>
            </li>
            <li>
                <a href="#!">About Us</a>
            </li>
            <!-- <li>
            <a href="#!">Portfolio</a>
            <ul class="nav-dropdown">
              <li>
                <a href="#!">Web Design</a>
              </li>
              <li>
                <a href="#!">Web Development</a>
              </li>
              <li>
                <a href="#!">Graphic Design</a>
              </li>
            </ul>
          </li> -->
            <li>
                <a href="#!">Contact Us</a>
            </li>
        </ul>
    </nav>
</div>
</section>      
        `;
    var arr=[fa,st];
    var cat=["Facutly","Student"];
    console.log(fa,st)
   for(var i=0;i<arr.length;i++){

    content+=`<div class="container main"><h1 class="heading text-center">${cat[i]}</h1>
    <div class="row id="cards">`;
    for (var j=0;j<arr[i].length;j++){
            var row=arr[i][j];
            image=row[1].split("id=")[1];
           
            content+=`
            <div class="col-lg-3">
        <div class="card p-0 mb-4">
            <div class="card-image">
                <img src="https://drive.google.com/uc?exports=view&id=${image}"  alt="${row[2]}">
            </div>
                    <div class="card-content d-flex flex-column align-items-center">
                        <h4 class="pt-2">${row[2]}</h4>
                        <h5>${row[3]}</h5>
                        <h5>${row[4]}</h5>
                    </div>
            
        </div>
    </div>
        
            `;
            
        }
        content+="</div></div>";
   }
   content+=`
   <footer id="footer">
       <div class="contact-form" id="" style="padding: 50px;">
           <div class="container">
               <div class="row">
                   <div class="col-lg-4 col-xs-12 col-sm-6">
                       <div class="footer-logo">
                           <a href="index.html" title="Welcome to Charity"
                               style="font-family:raleway,sans-serif;font-size: 25px;color: #f77740"><img
                                   src="img/logo2.bmp" ;alt="Softy Pinko" /> Helping Hands</a>
   
                       </div>
                       <p>
                           Helping Hands is a student-volunteer organization committed for the welfare of student
                           community in RGUKT-Nuzvid, a A.P state government university which caters to the
   
                           educational needs of rural youth of Andhra Pradesh. Founded in the year 2009 by a group
                           of enthusiastic students, it has been a driving force in instilling a sense of leadership
                           and
                           social responsibility among students who are otherwise mostly from the very modest/poor
                           families.
                       </p>
   
                       <h6>Follow us</h6>
                       <ul class="social-icons">
                           <li>
                               <a href="https://facebook.com" target="_blank"><i class="bi bi-facebook"></i></a>
                           </li>
                           <li>
                               <a href="https://twitter.com" target="_blank"><i class="bi bi-twitter"></i></a>
                           </li>
                           <li>
                               <a href="https://instagram.com" target="_blank"><i class="bi bi-instagram"></i></a>
                           </li>
                       </ul>
                   </div>
                   <div class="col-lg-4 col-xs-12 col-sm-6 twitter-update">
                       <iframe
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1376.7038517406606!2d80.82280060054529!3d16.794055192024082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3675e53fa3b4fb%3A0xfd1e193c90e4643!2sRajiv%20Gandhi%20University%20of%20Knowledge%20and%20Technology%20%2C%20Nuzvid!5e0!3m2!1sen!2sin!4v1615792611554!5m2!1sen!2sin"
                           width="600" height="450" style="border:0;height: 400px;width: 300px"></iframe>
                   </div>
   
   
                   <div class="col-lg-4 col-xs-12 col-sm-6">
                       <div class="row">
                           <div class="col-lg-12 col-md-6 col-sm-6 use-links">
                               <h6>Useful Links</h6>
                               <ul>
                                   <li><a href="#">Home</a></li>
                                   <li><a href="#">Gallery</a></li>
                                   <li><a href="#">Donate Us</a></li>
                                   <li><a href="#">About Us</a></li>
                               </ul>
   
                           </div>
                           <div class="col-lg-12 col-md-6 col-sm-6">
                               <h6>Contact Us</h6>
                               <address style="width: auto;">
                                   <span> <i class="fa fa-home"></i> <span>I3-First Floor-62,RGUKT, Nuzvid,
                                           521202</span> </span>
                                   <span> <i class="fa fa-phone-square"></i> <span>+91 9848678011</span> </span>
                                   <span> <i class="fa fa-envelope"></i> <span><a
                                               href="#"><span>helpinghands@rguktn.ac.in</span></a></span> </span>
                               </address>
                               <br>
                           </div>
                       </div>
   
                   </div>
               </div>
           </div>
   
       </div>
   </footer>`;
   document.getElementById("loader").style.display="none";
   document.getElementById("body").innerHTML=content;
}