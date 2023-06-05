// Formu gönderme işlemi için event listener ekleme
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Formun otomatik olarak gönderilmesini engelleme

  // Formdaki gerekli alanları kontrol etme
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Lütfen tüm alanları doldurun.");
    return;
  }

  // Formu sunucuya gönderme işlemi veya diğer işlemleri burada gerçekleştirebilirsiniz
  // Örneğin, Ajax kullanarak form verilerini sunucuya gönderebilirsiniz
  // Bu örnekte, sadece form verilerini konsola yazdırıyoruz
  console.log("Ad: " + name);
  console.log("E-posta: " + email);
  console.log("Mesaj: " + message);

  // Formun başarıyla gönderildiğini kullanıcıya bildirme
  alert("Form başarıyla gönderildi!");
  document.getElementById("contactForm").reset(); // Formu sıfırlama
});