let mobilePhones= [
    {
        "modalName" : "Samsung Galaxy On6",
        "image" : "Samsung-Galaxy-On6.jpg",
        "Technology"    : "GSM / HSPA / LTE",
        "OS" : "Android 8.0 (Oreo)",
        "Size" : "5.6 inches, 79.6 cm2 (~75.9% screen-to-body ratio)",
        "CPU" : "Exynos 7870 Octa,Octa-core 1.6 GHz Cortex-A53",
        "CAMERA" : "FRONT CAMERA(13 MP), SELFIE CAMERA(8 MP)",
        "More Details" : "https://www.gsmarena.com/samsung_galaxy_on6-9260.php"
    }
    
    ,
    {
        "modalName" : " Samsung Galaxy J7 (2018)",
        "Technology"    : "GSM / HSPA / LTE",
        "image" : "samsung-galaxy-j7.jpg",
        "OS" : "Android",
        "Size" : "5.5 inches, 83.4 cm2",
        "CPU" : "Octa-core",
        "CAMERA" : "FRONT CAMERA(13 MP), SELFIE CAMERA(13 MP)",
        "More Details" : "https://www.gsmarena.com/samsung_galaxy_j7_(2018)-9234.php"
    }
    ,
    {
        "modalName" : "Samsung Galaxy J3 (2018)",
        "Technology"    : "GSM / HSPA / LTE",
        "image" : "samsung-galaxy-j3.jpg",
        "OS" : "Android 8.0 (Oreo)",
        "Size" : "5.0 inches, 68.9 cm2 (~68.9% screen-to-body ratio)",
        "CPU" : "Exynos 7570 Quad,Quad-core 1.4 GHz Cortex-A53",
        "CAMERA" : "FRONT CAMERA(8 MP), SELFIE CAMERA(5 MP)",
        "More Details" : "https://www.gsmarena.com/samsung_galaxy_j3_(2018)-8928.php"
    }
    ,
    {
        "modalName" : "Samsung Galaxy A8 Star (A9 Star)",
        "Technology"    : "GSM / CDMA / HSPA / EVDO / LTE",
        "image" : "samsung-galaxy-a8.jpg",
        "OS" : "Android 8.0 (Oreo)",
        "Size" : "6.3 inches, 100.7 cm2 (~80.6% screen-to-body ratio)",
        "CPU" : "Qualcomm SDM660 Snapdragon 660,Octa-core (4x2.2 GHz Kryo 260 & 4x1.8 GHz Kryo 260)",
        "CAMERA" : "Dual FRONT CAMERA(24 MP), SELFIE CAMERA(24 MP)",
        "More Details" : "https://www.gsmarena.com/samsung_galaxy_j8-9205.php"
    }
    ,
    {
        "modalName" : "Samsung Galaxy J8",
        "Technology"    : "GSM / HSPA / LTE",
        "image" : "samsung-galaxy-j8.jpg",
        "OS" : "Android 8.0 (Oreo)",
        "Size" : "6.0 inches, 91.4 cm2 (~75.8% screen-to-body ratio)",
        "CPU" : "Qualcomm SDM450 Snapdragon 450,Octa-core 1.6 GHz Cortex-A53",
        "CAMERA" : "Dual FRONT CAMERA(16 MP), SELFIE CAMERA(16 MP)",
        "More Details" : "https://www.gsmarena.com/samsung_galaxy_s_light_luxury-9202.php"
    }
    ,
    {
        "modalName" : "Samsung Galaxy S Light Luxury",
        "Technology"    : "GSM / CDMA / HSPA / EVDO / LTE",
        "image" : "samsung-galaxy-s-light-luxury.jpg",
        "OS" : "Android 8.0 (Oreo)",
        "Size" : "5.8 inches, 85.4 cm2 (~84.2% screen-to-body ratio)",
        "CPU" : "Qualcomm SDM660 Snapdragon 660,Octa-core (4x2.2 GHz Kryo 260 & 4x1.8 GHz Kryo 260)",
        "CAMERA" : "FRONT CAMERA(16 MP), SELFIE CAMERA(8 MP)",
        "More Details" : "https://www.gsmarena.com/samsung_galaxy_s_light_luxury-9202.php"
    }
    ,
    {
        "modalName" : "Samsung Galaxy C7 (2017)",
        "Technology"    : "GSM /HSPA / LTE",
        "image" : "samsung-galaxy-c7.png",
        "OS" : "Android 7.1 (Nougat)",
        "Size" : "5.5 inches, 83.4 cm2 (~73.3% screen-to-body ratio)",
        "CPU" : "Octa-core (4x2.4 GHz & 4x1.7 GHz),",
        "CAMERA" : "FRONT CAMERA(13 MP), SELFIE CAMERA(7 MP)",
        "More Details" : "https://www.gsmarena.com/samsung_galaxy_c7_(2017)-8789.php"
    }
    ,
    {
        "modalName" : "Samsung Galaxy J7 (2017)",
        "Technology"    : "GSM / HSPA / LTE",
        "image" : "samsungj7.jpg",
        "OS" : "Android 7.0 (Nougat)",
        "Size" : "5.5 inches, 83.4 cm2 (~73.1% screen-to-body ratio)",
        "CPU" : "Exynos 7870 Octa,Octa-core 1.6 GHz Cortex-A53",
        "CAMERA" : "FRONT CAMERA(13 MP), SELFIE CAMERA(13 MP)",
        "More Details" : "https://www.gsmarena.com/samsung_galaxy_j7_(2017)-8675.php"
    }
    
]

function showitem()
{
    let containerEl=document.querySelector("#container");
    for(i=0;i< mobilePhones.length;i++)
    {
        containerEl.innerHTML +=`
                            <a href="#card-detail" class=" mobileCards" onclick="showMobliesDetail(${i})">
                                 <div class ="img" style="background-image:url(../images/samsung/${mobilePhones[i].image})">
                                <p class="modal-name">
                                    ${mobilePhones[i].modalName};
                                </p> 
                                </div>
                            </a>
                        `   
    }
}

function showMobliesDetail(mobileIndex)
{
    
    document.querySelector("#card-detail #mobile-name.card-title span").innerHTML=`${mobilePhones[mobileIndex].modalName}`;           
    document.querySelector("#card-detail #mobile-technology.card-text span").innerHTML=`${mobilePhones[mobileIndex].Technology}`;  
    document.querySelector("#mobile-img").style["background-image"] = `url(../images/samsung/${mobilePhones[mobileIndex].image})`;                                    
    document.querySelector("#card-detail #mobile-os.card-text span").innerHTML=`${mobilePhones[mobileIndex].OS}`;           
    document.querySelector("#card-detail #mobile-cpu.card-text span").innerHTML=`${mobilePhones[mobileIndex].CPU}`;           
    document.querySelector("#card-detail #mobile-camera.card-text span").innerHTML=`${mobilePhones[mobileIndex].CAMERA}`;           
    document.querySelector("a.btn#more-info").href= `${mobilePhones[mobileIndex]["More Details"]}`;   
    // document.querySelector("#more-info")            
}

