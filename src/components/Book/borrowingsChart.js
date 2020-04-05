import c3 from 'c3';
import React, {useEffect, useState} from 'react';
const getChart=(props)=>{
    const [columns,setColumns] = useState([]);
    const [columns1,setColumns1] = useState([]);
/*useEffect(()=>{
    console.log("columns1"+props.data1);
    const columns=props.data.map((borrowing,key)=>{return ([borrowing.book, borrowing.num_borrowings])});
    const columns1=props.data1.map((borrowing,key)=>{return ([borrowing.genre, borrowing.num_borrowings])});
    const columns2=props.data2.map((borrowing,key)=>{return ([borrowing.author, borrowing.num_borrowings])});

    // setColumns1(props.data1.map((borrowing,key)=>{return ([borrowing.genre, borrowing.num_borrowings])}));

    console.log(columns1);
    c3.generate({
        bindto:"#chart1",
        data: {
            columns:columns,
            type: 'bar'
        }
    });
    c3.generate({
        bindto:"#chart2",
        data: {
            columns:columns1,
            type: 'bar'
        }
    });
    c3.generate({
        bindto:"#chart3",
        data: {
            columns:columns2,
            type: 'bar'
        }
    });

    },[]);*/
function getBooks(){
    const columns=props.data.map((borrowing,key)=>{return ([borrowing.book, borrowing.num_borrowings])});

    c3.generate({
        bindto:"#chart1",
        data: {
            columns:columns,
            type: 'bar'
        },
        axis: {
            x:{
                label: 'book',
                position: 'outer-center'
            },
            y: {
                label: 'number of borrowings',
                position: 'outer-middle'
            }

        }
    });
}
    function getGenres(){
        const columns1=props.data1.map((borrowing,key)=>{return ([borrowing.genre, borrowing.num_borrowings])});
        c3.generate({
            bindto:"#chart2",
            data: {
                columns:columns1,
                type: 'bar'
            },
            axis: {
                x:{
                    label: 'genre',
                    position: 'outer-center'
                },
                y: {
                    label: 'number of borrowings',
                    position: 'outer-middle'
                }

            }
        });

    }
    function getAuthors(){
        const columns2=props.data2.map((borrowing,key)=>{return ([borrowing.author, borrowing.num_borrowings])});
        c3.generate({
            bindto:"#chart3",
            data: {
                columns:columns2,
                type: 'bar'
            },
            axis: {
                x:{
                    label: 'author',
                    position: 'outer-center'
                },
                y: {
                    label: 'number of borrowings',
                    position: 'outer-middle'
                }

            }
        });

    }

return(
    <div>
        <button onClick={getBooks} className="col-sm-3 btn-outline-info m-3" >Get statistics about books</button>
        <button onClick={getGenres} className="col-sm-3 btn-outline-info m-3">Get statistics about genres</button>
        <button onClick={getAuthors} className="col-sm-3 btn-outline-info m-3">Get statistics about authors</button>
        <h1>Books:</h1>
        <div id="chart1"></div>

        <h1>Genres:</h1>
        <div id="chart2"></div>
        <h1>Authors</h1>
        <div id="chart3"></div>
    </div>

);
}

export default getChart;