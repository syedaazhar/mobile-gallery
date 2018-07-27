let mobilePhones= [
    {
        "modalName" : "Apple iPad 9.7",
        "image" : "ipad-97.jpg",
        "Technology"    : "GSM / CDMA / HSPA / EVDO / LTE",
        "OS" : "iOS 11.3, upgradable to iOS 11.4.1",
        "Size" : "9.7 inches, 291.4 cm2 (~71.6% screen-to-body ratio)",
        "CPU" : "Apple A10 Fusion\n \Quad-core 2.34 GHz (2x Hurricane + 2x Zephyr)",
        "CAMERA" : "FRONT CAMERA(8 MP), SELFIE CAMERA(1.2 MP)",
        "More Details" : "https://www.gsmarena.com/apple_ipad_9_7_(2018)-9142.php"
    }
    
    ,
    {
        "modalName" : " Apple iPhone X",
        "Technology"    : "GSM / HSPA / LTE",
        "image" : "iPhoneX.jpg",
        "OS" : "iOS 11.1.1, upgradable to iOS 11.4.1",
        "Size" : "5.8 inches, 84.4 cm2 (~82.9% screen-to-body ratio)",
        "CPU" : "Apple A11 Bionic\n \Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)",
        "CAMERA" : "Dual FRONT CAMERA(12 MP), SELFIE CAMERA(7 MP)",
        "More Details" : "https://www.gsmarena.com/apple_iphone_x-8858.php"
    }
    ,
    {
        "modalName" : "Apple iPhone 8 Plus",
        "Technology"    : "GSM / HSPA / LTE",
        "image" : "iPhone8Plus.jpg",
        "OS" : "iOS 11, upgradable to iOS 11.4.1",
        "Size" : "5.5 inches, 83.4 cm2 (~67.4% screen-to-body ratio)",
        "CPU" : "Apple A11 Bionic\n \Hexa-core (2x Monsoon + 4x Mistral)",
        "CAMERA" : "Dual FRONT CAMERA(12 MP), SELFIE CAMERA(7 MP)",
        "More Details" : "https://www.gsmarena.com/apple_iphone_8_plus-8131.php"
    }
    ,
    {
        "modalName" : "Apple iPhone 7 Plus",
        "Technology"    : "GSM / CDMA / HSPA / EVDO / LTE",
        "image" : "iphone7plus.jpg",
        "OS" : "iOS 10.0.1, upgradable to iOS 11.4.1",
        "Size" : "5.5 inches, 83.4 cm2 (~67.7% screen-to-body ratio)",
        "CPU" : "Apple A10 Fusion\n \Quad-core 2.34 GHz (2x Hurricane + 2x Zephyr)",
        "CAMERA" : "Dual FRONT CAMERA(12 MP), SELFIE CAMERA(7 MP)",
        "More Details" : "https://www.gsmarena.com/apple_iphone_7_plus-8065.php"
    }
    ,
    {
        "modalName" : "Apple Watch Series 1 Aluminum 42mm",
        "Technology"    : "No cellular connectivity",
        "image" : "AppleWatch42mm.jpg",
        "OS" : "watchOS 3.0, upgradable to 4.3.2",
        "Size" : "1.65 inches, 8.6 cm2 (~55.4% screen-to-body ratio)",
        "CPU" : "Apple S1P\n \Dual-core 520 MHz Cortex-A7",
        "CAMERA" : "NO",
        "More Details" : "https://www.gsmarena.com/apple_watch_series_1_aluminum_42mm-8334.php"
    }
    ,
    {
        "modalName" : "Apple iPad Pro 10.5",
        "Technology"    : "GSM / CDMA / HSPA / EVDO / LTE",
        "image" : "PadPro10.jpg",
        "OS" : "iOS 10.3.2, upgradable to iOS 11.4.1",
        "Size" : "10.5 inches, 341.4 cm2 (~78.3% screen-to-body ratio)",
        "CPU" : "Apple A10X Fusion",
        "CAMERA" : "FRONT CAMERA(12 MP), SELFIE CAMERA(7 MP)",
        "More Details" : "https://www.gsmarena.com/apple_ipad_pro_10_5_(2017)-8716.php"
    }
    ,
    {
        "modalName" : "Apple iPhone SE",
        "Technology"    : "GSM / CDMA / HSPA / EVDO / LTE",
        "image" : "iPhoneSE.jpg",
        "OS" : "iOS 10.3.2, upgradable to iOS 11.4.1",
        "Size" : "10.5 inches, 341.4 cm2 (~78.3% screen-to-body ratio)",
        "CPU" : "Apple A10X Fusion",
        "CAMERA" : "FRONT CAMERA(12 MP), SELFIE CAMERA(7 MP)",
        "More Details" : "https://www.gsmarena.com/apple_ipad_pro_10_5_(2017)-8716.php"
    }
    ,
    {
        "modalName" : "Apple Watch Edition 38mm\n \(1st gen)",
        "Technology"    : "No cellular connectivity",
        "image" : "AppleWatch38mm.jpeg",
        "OS" : "watchOS 1.0, upgradable to 4.3.2",
        "Size" : "1.5 inches, 7.1 cm2 (~55.1% screen-to-body ratio)",
        "CPU" : "Apple S1\n \Apple S1",
        "CAMERA" : "NO",
        "More Details" : "https://www.gsmarena.com/apple_iphone_se-7969.php"
    }
    
]

function showitem()
{
    let containerEl=document.querySelector("#container");
    for(i=0;i< mobilePhones.length;i++)
    {
        containerEl.innerHTML +=`
                            <div class=" mobileCards" onclick="showMobliesDetail(${i})">
                                 <div class ="img" style="background-image:url(../images/${mobilePhones[i].image})">
                                <p class="modal-name">
                                    ${mobilePhones[i].modalName};
                                </p> 
                            </div>
                        `   
    }
}

function showMobliesDetail(mobileIndex)
{
    let cardDetail=document.querySelector("#card-detail");
    

        cardDetail.innerHTML =`
                                <div class="card text-center">
                                    <div class="card-header">
                                        Featured
                                    </div>
                                    <div class="card-body">
                                        <h5 id="mobile-name" class="card-title" >
                                            modalName : ${mobilePhones[mobileIndex].modalName}
                                        </h5>
                                        <p id="mobile-technology" class="card-text">
                                            Technology : ${mobilePhones[mobileIndex].Technology}
                                        </p>
                                        <div id="mobile-img" class="card-text" 
                                        style="background-image:url(../images/${mobilePhones[mobileIndex].image})">
                                        </div>
                                        <p id="mobile-os" class="card-text" >
                                            OS: ${mobilePhones[mobileIndex].OS}
                                        </p>
                                        <p id="mobile-cpu" class="card-text" > 
                                            CPU : ${mobilePhones[mobileIndex].CPU}
                                        </p>
                                        <p id="mobile-camera" class="card-text"> CAMERA :    
                                            ${mobilePhones[mobileIndex].CAMERA}
                                        </p>
                                        <a href=${mobilePhones[mobileIndex]["More Details"]} target="blank_"  class="btn btn-primary" id="more-info">More Details Click Here
                                           
                                        </a>
                                    </div>
                                </div>
        `
}