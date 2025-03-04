let isim = prompt("Lütfen isminizi girin:");
if (isim) {
    alert('Hoş geldin ' + isim);
    document.getElementById("constantValue").textContent = isim;
} else {
    isim = "Ziyaretçi"
    document.getElementById("constantValue").textContent = isim;
}
        
       
        function updateDateTime() {
            const now = new Date(); 
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true 
            };
            const dateTimeString = now.toLocaleString('tr-tr', options); 
            document.getElementById("dateTime").textContent = dateTimeString; 
        }
        
        
        setInterval(updateDateTime, 1000);
        
       
        updateDateTime();

   