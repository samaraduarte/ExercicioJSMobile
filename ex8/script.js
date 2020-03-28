var notificationsEnable = false

function initNotifications(){
    if (window.Notification){
        Notification.requestPermission(function(permission){
            if(permission === 'granted'){
                notificationsEnable = true  
            } else {
                alert("Voce negou a notificação :(")
            }
         })
    } else {
        alert("Seu browser não suporta a API")
    }
}
function showNotification(){
    if (notificationsEnable){
        var notification = new Notification("Samara", {
            body: 'Voce clicou no botão!'
    })
    setTimeout(function() { notification.close(); }, 5000)
} else {
    alert('Notificações desativadas')
}
}