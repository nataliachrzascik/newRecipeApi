import React, { useEffect, useState } from 'react';

export default function AddNew() {
    const [file, setFile] = useState(undefined);

    function readFile() {
        if (this.files && this.files[0]) {
            var FR = new FileReader();
            FR.addEventListener("load", function (e) {
                document.getElementById("img").src = e.target.result;
                setFile(e.target.result)
            });
            FR.readAsDataURL(this.files[0]);
        }
    }
    useEffect(() => {
        document.getElementById("inp").addEventListener("change", readFile);
    }, []);

    return (
        <div className="min-vh-100">
            <h1>Dodaj przepis</h1>
            <form className="form-horizontal" action="/add" method="POST" encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="title">Nazwa dania:</label><br />
                    <input className="w-50 p-2" type="text" name="title" placeholder="nazwa" required /><br />
                    <label htmlFor="category">Wybierz kategorie:</label><br />
                    <select name="category" id="cat" required>
                        <option value="sweets">Słodkości</option>
                        <option value="main">Dania główne</option>
                        <option value="soups">Zupy</option>
                        <option value="cocktails">Koktajle</option>
                    </select>
                    <br />
                    <label htmlFor="ingredients">Składniki: (oddzielane średnikami)</label><br />
                    <input className="w-50 p-2" type="text" name="ingredients" placeholder="piepsz;sól" required /><br />
                    <label htmlFor="prepatarion">Opis przygotowania:</label><br />
                    <textarea className="w-50 p-2" name="preparation" placeholder="Zagotuj wodę.." required /><br />
                    <label htmlFor="uploadedFile">Zdjęcie nie jest wymagane</label><br />
                    <input type="file" id="inp" name="uploadedFile" />
                    <br />
                    <img id="img" height="150"></img>
                    <br />
                    <input type="hidden" name="fileValue" value={file} />
                    <input type="submit" value="Wyślij przepis" />
                </div>
            </form>
        </div>
    )
}


