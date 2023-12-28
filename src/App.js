import { Box } from '@mui/material'
import React from 'react'

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from "./components"
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>

            <Box sx={{ background: "#000" }}>
                <Navbar />

                <Routes>
                    <Route path='/' exact element={<Feed />} ></Route>
                    <Route path='/video/:id' element={<VideoDetail />} ></Route>
                    <Route path='/channel/:id' element={<ChannelDetail />} ></Route>
                    <Route path='/search/:searchTerm' element={<SearchFeed />} ></Route>
                </Routes>
            </Box>
        </BrowserRouter>
    )
}

export default App