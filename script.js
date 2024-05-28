 
     let textele=document.getElementById("text");

     let voiceele=document.getElementById("voicelist");

     let speechbtn=document.getElementById("speak");

     let speechsynth=speechSynthesis

     speechsynth.addEventListener("voiceschanged",loadvoices);

     function loadvoices()
     {
        let voices=speechSynthesis.getVoices()
      
        for(voice of voices)
        {

            let option=document.createElement("option")
            option.value=voice.name;
            option.innerText=`${voice.name} ${voice.lang}`

            voiceele.appendChild(option)
     
        }

     }


    function texttospeech(text)
    {
      let utterance= new  SpeechSynthesisUtterance(text);

      for(let voice of speechsynth.getVoices())
      {
         if(voice.name===voiceele.value)
         {
            utterance.voice=voice;
         }

      }

      speechsynth.speak(utterance);

    }

     speechbtn.addEventListener("click",function(){
           
        if(textele.value !=="")
        {

            if(!speechsynth.speaking){
                texttospeech(textele.value);
            }
        }
        else{
            alert("enter some thing")
        }


     })



