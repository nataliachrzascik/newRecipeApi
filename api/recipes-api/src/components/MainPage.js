import { createFactory } from "react";
import Container from 'react-bootstrap/Container';

import React from 'react'

export default function MainPage() {
    return (
        <Container className="vh-100">
            <h1 className="mt-4 p-4">Baza przepisów</h1>
            <h2 className="p-3">Witamy w bazie przepisów. Wybierz interesującą Cię kategorie dań lub dodaj własny przepis</h2>
        </Container>
    )
}
