import React from "react";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MovieCard from "../components/MovieCard";

const HomePage = ({movies, page, onPage, onMovie}: {movies: any, page: number, onPage: Function, onMovie: Function}) => {
    const items = []; // ✅ Good: locally created
    for (let i = 0; i < movies?.length; i++) {
        const movie = movies[i];
        items.push(
            <MovieCard key={movie.id} moviePoster={movie.poster.url} rating={movie!.rating.filmCritics} name={movie!.name} date={movie!.date} />
        ); // ✅ Good: local mutation is okay
    }

    return (
        <div>
            <Stack spacing={2}>
                <Pagination
                    count={10}
                    page={page}
                    onChange={(page) => onPage(page)}
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                        />
                    )}
                />
            </Stack>
            <section>
                {items}
            </section>
        </div>
    )
}

export default HomePage;