let mobilePhones= [
    {
        "modalName" : "Oppo A3s",
        "image" : "Oppo-A3.png",
        "Technology"    : "GSM / HSPA / LTE",
        "OS" : "Android 8.1 (Oreo)",
        "Size" : "6.2 inches, 95.9 cm2 (~81.2% screen-to-body ratio)",
        "CPU" : "Qualcomm SDM450 Snapdragon 450,Octa-core 1.8 GHz Cortex-A53",
        "CAMERA" : "FRONT CAMERA(13 MP), SELFIE CAMERA(8 MP)",
        "moreDetails" : "https://www.gsmarena.com/oppo_a3s-9269.php"
    }
    
    ,
    {
        "modalName" : "Oppo A5",
        "Technology"    : "GSM / CDMA / HSPA / LTE",
        "image" : "oppo-a5.jpg",
        "OS" : "Android 8.1 (Oreo)",
        "Size" : "6.2 inches, 95.9 cm2 (~81.2% screen-to-body ratio)",
        "CPU" : "Qualcomm SDM450 Snapdragon 450,Octa-core 1.8 GHz Cortex-A53",
        "CAMERA" : "Dual FRONT CAMERA(13 MP), SELFIE CAMERA(8 MP)",
        "moreDetails" : "https://www.gsmarena.com/oppo_a5-9259.php"
    }
    ,
    {
        "modalName" : "Oppo Find X",
        "Technology"    : "GSM / HSPA / LTE",
        "image" : "OPPO-Find-X.jpg",
        "OS" : "Android 8.1 (Oreo)",
        "Size" : "6.42 inches, 101.2 cm2 (~87.0% screen-to-body ratio)",
        "CPU" : "Qualcomm SDM845 Snapdragon 845,Octa-core (4x2.8 GHz Kryo 385 Gold & 4x1.7 GHz Kryo 385 Silver)",
        "CAMERA" : " FRONT CAMERA(12 MP), SELFIE CAMERA(7 MP)",
        "moreDetails" : "https://www.gsmarena.com/oppo_find_x-7885.php"
    }
    ,
    {
        "modalName" : "Oppo Realme 1",
        "Technology"    : "GSM /HSPA / LTE",
        "image" : "realm1.jpg",
        "OS" : "Android 8.1 (Oreo)",
        "Size" : "6.0 inches, 92.9 cm2 (~78.9% screen-to-body ratio)",
        "CPU" : "Mediatek MT6771 Helio P60,Octa-core (4x2.0 GHz Cortex-A73 & 4x2.0 GHz Cortex-A53)",
        "CAMERA" : "Dual FRONT CAMERA(13 MP), SELFIE CAMERA(7 MP)",
        "moreDetails" : "https://www.gsmarena.com/oppo_realme_1-9200.php"
    }
    ,
    {
        "modalName" : "Oppo A71",
        "Technology"    : "GSM / UMTS / LTE",
        "image" : "oppoa71.jpg",
        "OS" : "Android 7.1 (Nougat)",
        "Size" : "5.2 inches, 74.5 cm2 (~68.2% screen-to-body ratio)",
        "CPU" : "Mediatek MT6750, Octa-core (4x1.5 GHz Cortex-A53 & 4x1.0 GHz Cortex-A53)",
        "CAMERA" : "FRONT CAMERA(12 MP), SELFIE CAMERA(7 MP)",
        "moreDetails" : "https://www.gsmarena.com/oppo_a71-8849.php"
    }
    ,
    {
        "modalName" : "Oppo F5 Youth",
        "Technology"    : "GSM / HSPA / LTE",
        "image" : "oppof5.jpg",
        "OS" : "Android 7.1 (Nougat)",
        "Size" : "6.0 inches, 92.9 cm2 (~78.1% screen-to-body ratio)",
        "CPU" : "Mediatek MT6763T Helio P23,Octa-core 2.5 GHz Cortex-A53",
        "CAMERA" : "FRONT CAMERA(13 MP), SELFIE CAMERA(16 MP)",
        "moreDetails" : "https://www.gsmarena.com/oppo_f5_youth-8909.php"
    }
    ,
    {
        "modalName" : "Oppo F1",
        "Technology"    : "GSM / HSPA / LTE",
        "image" : "oppo71.jpg",
        "OS" : "Android 5.1 (Lollipop)",
        "Size" : "5.0 inches, 68.9 cm2 (~67.6% screen-to-body ratio)",
        "CPU" : "Qualcomm MSM8939v2 Snapdragon 616,Octa-core (4x1.7 GHz Cortex-A53 & 4x1.0 GHz Cortex-A53)",
        "CAMERA" : "FRONT CAMERA(13 MP), SELFIE CAMERA(8 MP)",
        "moreDetails" : "https://www.gsmarena.com/oppo_f1-7855.php"
    }
    ,
    {
        "modalName" : "Oppo R11s Plus",
        "Technology"    : "GSM / CDMA / HSPA / EVDO / LTE",
        "image" : "oppoR11s.jpg",
        "OS" : "Android 7.1.1 (Nougat)",
        "Size" : "6.43 inches, 106.7 cm2 (~80.7% screen-to-body ratio)",
        "CPU" : "Qualcomm SDM660 Snapdragon 660",
        "CAMERA" : "FRONT CAMERA(16 MP), SELFIE CAMERA(20 MP)",
        "moreDetails" : "https://www.gsmarena.com/oppo_r11s_plus-8927.php"
    }
    
]

function showitem()
{
    let containerEl=document.querySelector("#container");
    for(i=0;i< mobilePhones.length;i++)
    {
        containerEl.innerHTML +=`
                            <a href="#card-detail" class=" mobileCards" onclick="showMobliesDetail(${i})">
                                 <div class ="img" style="background-image:url(../images/oppo/${mobilePhones[i].image})">
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
    document.querySelector('#card-detail').style.display = 'block';
    document.querySelector("#card-detail #mobile-name.card-title span").innerHTML=`${mobilePhones[mobileIndex].modalName}`;           
    document.querySelector("#card-detail #mobile-technology.card-text span").innerHTML=`${mobilePhones[mobileIndex].Technology}`;  
    document.querySelector("#mobile-img").style["background-image"] = `url(../images/oppo/${mobilePhones[mobileIndex].image})`;                                    
    document.querySelector("#card-detail #mobile-os.card-text span").innerHTML=`${mobilePhones[mobileIndex].OS}`;           
    document.querySelector("#card-detail #mobile-cpu.card-text span").innerHTML=`${mobilePhones[mobileIndex].CPU}`;           
    document.querySelector("#card-detail #mobile-camera.card-text span").innerHTML=`${mobilePhones[mobileIndex].CAMERA}`;          
    document.querySelector("a.btn#more-info").href= `${mobilePhones[mobileIndex].moreDetails}`;      
}

