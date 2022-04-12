const firebaseConfig = {
      apiKey: "AIzaSyBejZ_IfPS-WMa9SiQiv5dRzuCrg5ndHlM",
      authDomain: "htmljsfromtxt.firebaseapp.com",
      databaseURL: "https://htmljsfromtxt-default-rtdb.firebaseio.com",
      projectId: "htmljsfromtxt",
      storageBucket: "htmljsfromtxt.appspot.com",
      messagingSenderId: "168253472878",
      appId: "1:168253472878:web:a3038857feb49f6b49e67f"
    };

    firebase.initializeApp(firebaseConfig);

    let DataFormDB = firebase.database().ref('RigForm')

    document.getElementById('RegForms').addEventListener('submit', submitForm)

    function submitForm(e){
      e.preventDefault()
            let name = getElementVal('Name')
            let email = getElementVal('Email')
            let phone = getElementVal('Phone')
            let payment = getElementVal('payment')

            if(!name){
                  document.querySelector("#NameErro").style.display = "block"
            }else if(!email){
                  document.querySelector("#EmailErro").style.display = "block"
            }else if(!phone){
                  document.querySelector("#PhoneErro").style.display = "block"
            }else if(!payment){
                  document.querySelector("#ProofErro").style.display = "block"
            }else{
                  saveData(name, email, phone, payment)
                  console.log(name, email, phone, payment);
                  
                  document.querySelector(".FormSubmit").style.display = "block"
                  setTimeout(() => {
                        document.querySelector(".FormSubmit").style.display = "none"
                  }, 3000);
                document.getElementById('RegForms').reset()
            }

           
    }

    const saveData = (name, email, phone, payment) =>{
          const newDataFormDB = DataFormDB.push()
          newDataFormDB.set({
                nameOfUser : name,
                emailOfUser : email,
                phoneOfUser : phone,
                paymentOfUser : payment,
          })

    }

    const getElementVal = (id) =>{
          return document.getElementById(id).value
    }

