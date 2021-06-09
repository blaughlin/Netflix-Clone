import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { FaqsContainer } from '../containers/faqs'
import { FooterContainer } from '../containers/footer'
import { JumbotronContainer } from '../containers/jumbotron'

export default function Home() {
    return (
        <>
            <JumbotronContainer />
            <FaqsContainer/>
            <FooterContainer />
        </>
    )
}