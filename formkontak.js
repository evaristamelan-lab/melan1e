const form  = document.getElementById("formkontak");
form.addEventListener("submit",function(event) {
    //mencegah form berpindah ke halaman lain
    event.preventDefault();

    //================NOMOR WHATSAPP TUJUAN================
    const nomorWhatsApp ="6281243408062";

    //================MENGAMBIL DATA DARI FORM=============

    const nama =
        document.getElementById("nama").value;
    const email =
        document.getElementById("email").value;

    const telepon =
        document.getElementById("telepon").value;

    const minat =
        document.getElementById("minat").value;

    const pesan =
        document.getElementById("pesan").value;


        //==================MEMBUAT ISI PESAN WHATSAPP=====================
        const isipesan =
    `Halo, saya menghubungi melalui website CV.
    Nama Lengkap    :${nama}
    Email           :${email}
    No.Telepon      :${telepon}
    Bidang Minat    :${minat}
    Pesan:
    ${pesan}`;
    //================MENGUBAH PESAN MENJADI FORMAT URL===================
    const pesanEncoded =
    encodeURIComponent(isipesan);

    //===============MEMBUAT LINK WHATSAPP===============================
    const urlWhatsApp =
        //menggunakan aplikasi w.a
    `https://wa.me/${nomorWhatsApp}?text=${pesanEncoded}`; 
        //menggunakan w.a web
        `https:webwhatsapp.com/send?phone=${nomorWhatsApp}?text=${pesanEncoded}`;

        //==================MEMBUKA WHATSAPP============================
        window.open(urlWhatsApp,"_blank");

    });


