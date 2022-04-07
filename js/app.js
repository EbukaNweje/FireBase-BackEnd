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
            let name = getElementVal('NM')
            let password = getElementVal('PS')
            let email = getElementVal('Email')

            saveData(name, password, email)
            // console.log(name, password, email);
            
            document.getElementById("art").style.display = "block"
            setTimeout(() => {
                  document.getElementById("art").style.display = "none"
            }, 3000);
          document.getElementById('RegForms').reset()
    }

    const saveData = (name, password, email) =>{
          const newDataFormDB = DataFormDB.push()
          newDataFormDB.set({
                nameOfUser : name,
                passwordOfUser : password,
                emailOfUser : email
          })
    }

    const getElementVal = (id) =>{
          return document.getElementById(id).value
    }