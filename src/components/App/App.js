import React, {Component} from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import Header from "../Header/header";
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'
import BooksService from '../../repository/axiosBooksRepository';
import AuthorsService from '../../repository/axiosAuthorsRepository';
import EmployeesService from '../../repository/employeesAxiosRepository';
import MembersService from '../../repository/membersAxiosRepository';
import GenresService from '../../repository/genresAxiosRepository';
import loggingService from "../../repository/loggingAxiosRepository";
import SignIn from '../security/sign-in';
import SignUp from '../security/sign-up';





import EditBook from '../Book/editBook'
import BookRow from "../Book/bookRow";
import CreateBook from "../Book/createBook";
import Details from '../Book/Details'
import CreateEdition from  '../Editions/createEdition'

import EditAuthor from '../Authors/editAuthor'
import AuthorRow from "../Authors/authorRow";
import DetailsAuthor from '../Authors/details'

import CreateAuthor from "../Authors/createAuthor";
import EditEmpoyee from '../Employee/editEmployee'
import EmployeeRow from "../Employee/employeeRow";
import EmployeesSearch from "../Employee/searchEmployee";

import CreateEmployee from "../Employee/createEmployee";
import AuthorsSearch from "../Authors/authorsSearch";

import EditMember from '../Member/editMember'
import MemberRow from "../Member/memberRow";
import CreateMember from "../Member/createMember";

import EditGenre from '../Genre/editGenre'
import GenreRow from "../Genre/genreRow";
import CreateGenre from "../Genre/createGenre";
import DetailsGenre from '../Genre/details'
import GenresSearch from '../Genre/genresSearch'
import BooksSearch from '../Book/bookSearch'
import MemberSearch from '../Member/memberSearch'
import Borrowingssearch from '../Borrowing/borrowingssearch'


import BorrowingsChart from '../Book/borrowingsChart'



import BorrowingRow from "../Borrowing/borrowingRow";
import CreateBorrowing from "../Borrowing/createBorrowing";
import PenaltyRow from "../Penalty/penaltyRow";
import CreatePenalty from "../Penalty/createPenalty";
import ReactPaginate from 'react-paginate';
import EditionsService from "../../repository/editionsAxiosRepository";
import BorrowingsService from "../../repository/borrowingsAxiosRepository";
import PenaltiesService from "../../repository/penaltiesAxiosRepository";
import PenaltySearch from "../Penalty/penaltySearch";
//import Borrowingssearch from "../Borrowing/borrowingssearch";


class App extends  Component{


  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,

      columnsBorrowings: [],
      columnsGenres:[],
      columnsAuthors:[],

      books: [],
      authors: [],
      employees: [],
      members:[],
      genres:[],
      editions:[],
      borrowings:[],
      penalties:[],

      pageSize:2,
      page:0,
      totalPages:0,
      pageSizeBorrowings:2,
      pageBorrowings:0,
      totalPagesBorrowings:0,
      pageSizePenalties:2,
      pagePenalties:0,
      totalPagesPenalties:0,
      pageSizeAuthors:2,
      pageAuthors:0,
      totalPagesAuthors:0,
      pageSizeEmployees:2,
      pageEmployees:0,
      totalPagesEmployees:0,
      pageSizeMembers:2,
      pageMembers:0,
      totalPagesMembers:0,
      pageSizeGenres:2,
      pageGenres:0,
      totalPagesGenres:0,

  }
    this.loadBooks = this.loadBooks.bind(this);
    this.loadAuthors = this.loadAuthors.bind(this);
    this.loadEmployees = this.loadEmployees.bind(this);
    this.loadMembers = this.loadMembers.bind(this);
    this.loadGenres = this.loadGenres.bind(this);
    this.loadEditions=this.loadEditions.bind(this);
    this.loadBorrowings=this.loadBorrowings.bind(this);
    this.loadPenalties=this.loadPenalties.bind(this);



  }

  componentDidMount() {
    this.loadBorrowings();

    this.loadBooks();
    this.loadAuthors();
    this.loadEmployees();
    this.loadMembers();
    this.loadGenres();
    this.loadEditions();
    this.loadPenalties();
    this.loadChartDataGenres();
    this.loadChartDataAuthors();

    this.loadChartData();






  }
//books///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  loadBooks = (page=0) => {

    BooksService.fetchBooksPaged(page).then((data) => {
      this.setState({
        books: data.data.content,
        page:data.data.page,

        pageSize:data.data.pageSize,
        totalPages:data.data.totalPages

      });
      console.log(data);
    })
  };
  searchBooks = (searchTerm) => {
    BooksService.searchBook(searchTerm).then((response)=>{
      this.setState({
        books: response.data,

      })
    })
  };
  loadChartData = () => {
    BooksService.getBorrowings().then((response)=>{
      this.setState({
        columnsBorrowings: response.data,

      })
    })
  };
  loadChartDataGenres = () => {
    GenresService.getBorrowings().then((response)=>{
      this.setState({
        columnsGenres: response.data,

      })
    })
  };
  loadChartDataAuthors= () => {
    AuthorsService.getBorrowings().then((response)=>{
      this.setState({
        columnsAuthors: response.data,

      })
    })
  };
  loadEditions = () => {

    EditionsService.fetchEditions().then((data) => {
      this.setState({
        editions: data.data,


      });
      console.log("reload"+data);
    })
  }
  deleteBook = (name) => {
    BooksService.deleteBook(name).then((response)=>{
      this.setState((state) => {
        const books = state.books.filter((i) => {
          return i.book_id !== i.book_id;
        });
        return {books}
      })
    })
  }
  createBook = (newBook) => {
    BooksService.addBook(newBook).then((response)=>{
      const newBook = response.data;
      this.setState((prevState) => {
        const newBookRef = [...prevState.books, newBook];

        return {
          "books": newBookRef
        }
      });
    });
  };
  createEdition = (newEdition) => {
    EditionsService.addEdition(newEdition).then((response)=>{
      const newEdition= response.data;
      this.setState((prevState) => {
        const newEditionRef = [...prevState.editions, newEdition];

        return {
          "editions": newEditionRef
        }
      });
    });
  }

  editBook = ((editedBook) => {
    BooksService.editBook(editedBook).then((response)=>{
      const newBook = response.data;
      this.setState((prevState) => {
        const newBookRef = prevState.books.filter((item)=>{

          if (item.book_id===newBook.book_id) {
            return newBook;
          }
          return item;
        })
        return {
          "books": newBookRef
        }
      });
    });
  });
  //authors
  loadAuthors = (page=0) => {

    AuthorsService.fetchAuthorsPaged(page).then((data) => {
      this.setState({
        authors: data.data.content,
        pageAuthors:data.data.page,

        pageSizeAuthors:data.data.pageSize,
        totalPagesAuthors:data.data.totalPages

      });
      console.log(data);
    })
  };
  searchAuthors = (searchTerm) => {
    AuthorsService.searchAuthor(searchTerm).then((response)=>{
      this.setState({
        authors: response.data,

      })
    })
  };
  deleteAuthor = (name) => {
    AuthorsService.deleteAuthor(name).then((response)=>{
      this.setState((state) => {
        const authors = state.authors.filter((i) => {
          return i.authorId !== i.authorId;
        });
        return {authors}
      })
    })
  }

  createAuthor = (newAuthor) => {
    AuthorsService.addAuthor(newAuthor).then((response)=>{
      const newAuthor = response.data;
      this.setState((prevState) => {
        const newAuthorRef = [...prevState.authors, newAuthor];

        return {
          "authors": newAuthorRef
        }
      });
    });
  }

  editAuthor = ((editedAuthor) => {
    AuthorsService.editAuthor(editedAuthor).then((response)=>{
      const newAuthor = response.data;
      this.setState((prevState) => {
        const newAuthorRef = prevState.authors.filter((item)=>{

          if (item.authorId===newAuthor.authorId) {
            return newAuthor;
          }
          return item;
        })
        return {
          "authors": newAuthorRef
        }
      });
    });
  });



//borrowings
  loadBorrowings = (page=0) => {

    BorrowingsService.fetchBorrowingsPaged(page).then((data) => {
      console.log("borrowing"+data.data.content);

      this.setState({
        borrowings: data.data.content,
        pageBorrowings:data.data.page,

        pageSizeBorrowings:data.data.pageSize,
        totalPagesBorrowings:data.data.totalPages

      });
    })
console.log("stateee"+this.state.totalPagesBorrowings);
  }
  deleteBorrowing = (name) => {
    BorrowingsService.deleteBorrowing(name).then((response)=>{
      this.setState((state) => {
        const borrowings = state.borrowings.filter((i) => {
          return i.borrowingId !== i.borrowingId;
        });
        return {borrowings}
      })
    })
  }

  createBorrowing = (newBorrowing) => {
    BorrowingsService.addBorrowing(newBorrowing).then((response)=>{
      const newBorrowing = response.data;
      this.setState((prevState) => {
        const newBorrowingRef = [...prevState.borrowings, newBorrowing];

        return {
          "borrowings": newBorrowingRef
        }
      });
    });
  }

  editBorrowing = ((editedBorrowing) => {
    BorrowingsService.editBorrowing(editedBorrowing).then((response)=>{
      const newBorrowing = response.data;
      this.setState((prevState) => {
        const newBorrowingRef = prevState.borrowings.filter((item)=>{

          if (item.borrowingId===newBorrowing.borrowingId) {
            return newBorrowing;
          }
          return item;
        })
        return {
          "borrowings": newBorrowingRef
        }
      });
    });
  });
  returnBorrowing = (borrowing) => {
    BorrowingsService.returnBorrowing(borrowing).then((response)=>{
      this.setState((state) => {
        const borrowings = state.borrowings.filter((i) => {
          return i.borrowingId !== i.borrowingId;
        });
        return {borrowings}
      });
      this.loadEditions()
    })
  };



//penalties
  loadPenalties = (page=0) => {

    PenaltiesService.fetchPenaltiesPaged(page).then((data) => {
      //console.log("borrowing"+data.data.content);

      this.setState({
        penalties: data.data.content,
        pagePenalties:data.data.page,

        pageSizePenalties:data.data.pageSize,
        totalPagesPenalties:data.data.totalPages

      });
    })
    //console.log("stateee"+this.state.totalPagesBorrowings);
  };
  loadPenaltiesTodayUnpaid = () => {

    PenaltiesService.getUnpaidTodayPenalties().then((data) => {
      //console.log("borrowing"+data.data.content);

      this.setState({
        penalties: data.data,


      });
    })
    //console.log("stateee"+this.state.totalPagesBorrowings);
  }
  deletePenalty = (name) => {
    PenaltiesService.deletePenalty(name).then((response)=>{
      this.setState((state) => {
        const penalties = state.penalties.filter((i) => {
          return i.penaltyId !== i.penaltyId;
        });
        return {penalties}
      })
    })
  };
  payPenalty = (name) => {
    PenaltiesService.payPenalty(name).then((response)=>{
      this.setState((state) => {
        const penalties = state.penalties.filter((i) => {
          return i.penaltyId !== i.penaltyId;
        });
        return {penalties}
      })
    })
  };

  createPenalty = (newPenalty) => {
    PenaltiesService.addPenalty(newPenalty).then((response)=>{
      const newPenalty = response.data;
      this.setState((prevState) => {
        const newPenaltyRef = [...prevState.penalties, newPenalty];

        return {
          "penalties": newPenaltyRef
        }
      });
    });
  }


  ////////////////////

  //employees
  loadEmployees = (page=0) => {

    EmployeesService.fetchEmployeesPaged(page).then((data) => {
      this.setState({
        employees: data.data.content,
        pageEmployees:data.data.page,

        pageSizeEmployees:data.data.pageSize,
        totalPagesEmployees:data.data.totalPages

      });
      console.log(data);
    })
  };
  searchEmployee = (searchTerm) => {
    EmployeesService.searchEmployee(searchTerm).then((response)=>{
      this.setState({
        employees: response.data,

      })
    })
  };
  deleteEmployee = (name) => {
    EmployeesService.deleteEmployee(name).then((response)=>{
      this.setState((state) => {
        const employees = state.employees.filter((i) => {
          return i.ESSN !== i.ESSN;
        });
        return {employees}
      })
    })
  };

  createEmployee = (newEmployee) => {
    EmployeesService.addEmployee(newEmployee).then((response)=>{
      const newEmployee = response.data;
      this.setState((prevState) => {
        const newEmployeeRef = [...prevState.employees, newEmployee];

        return {
          "employees": newEmployeeRef
        }
      });
    });
  };
  editEmployee = ((editedEmployee) => {
    EmployeesService.editEmployee(editedEmployee).then((response)=>{
      const newEmployee = response.data;
      this.setState((prevState) => {
        const newEmployeeRef = prevState.employees.filter((item)=>{

          if (item.ESSN===newEmployee.ESSN) {
            return newEmployee;
          }
          return item;
        })
        return {
          "employees": newEmployeeRef
        }
      });
    });
  });


  /////members
  loadMembers = (page=0) => {

    MembersService.fetchMembersPaged(page).then((data) => {
      this.setState({
        members: data.data.content,
        pageMembers:data.data.page,

        pageSizeMembers:data.data.pageSize,
        totalPagesMembers:data.data.totalPages

      });
      console.log(data);
    })
  };
  searchMembers = (searchTerm) => {
    MembersService.searchMember(searchTerm).then((response)=>{
      this.setState({
        members: response.data,

      })
    })
  };
  deleteMember = (name) => {
    MembersService.deleteMember(name).then((response)=>{
      this.setState((state) => {
        const members = state.members.filter((i) => {
          return i.ESSN !== i.ESSN;
        });
        return {members}
      })
    })
  };

  createMember = (newMember) => {
    MembersService.addMember(newMember).then((response)=>{
      const newMember = response.data;
      this.setState((prevState) => {
        const newMemberRef = [...prevState.members, newMember];

        return {
          "members": newMemberRef
        }
      });
    });
  };
  editMember = ((editedMember) => {
    MembersService.editMember(editedMember).then((response)=>{
      const newMember = response.data;
      this.setState((prevState) => {
        const newMemberRef = prevState.members.filter((item)=>{

          if (item.ESSN===newMember.ESSN) {
            return newMember;
          }
          return item;
        })
        return {
          "members": newMemberRef
        }
      });
    });
  });



//genres///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  loadGenres = (page=0) => {

    GenresService.fetchGenresPaged(page).then((data) => {
      this.setState({
        genres: data.data.content,
        pageGenres:data.data.page,

        pageSizeGenres:data.data.pageSize,
        totalPagesGenres:data.data.totalPages

      });
      console.log("state genres"+data.data.content);
    })
  };
  searchGenres = (searchTerm) => {
    GenresService.searchGenre(searchTerm).then((response)=>{
      this.setState({
        genres: response.data,

      })
    })
  };
  searchBorrowings = (searchTerm) => {
    BorrowingsService.searchBorrowing(searchTerm).then((response)=>{
      this.setState({
        borrowings: response.data,

      })
    })
  };
  searchPenalties = (searchTerm) => {
    PenaltiesService.searchPenalty(searchTerm).then((response)=>{
      this.setState({
        penalties: response.data,

      })
    })
  };
  deleteGenre = (name) => {
    GenresService.deleteGenre(name).then((response)=>{
      this.setState((state) => {
        const genres = state.genres.filter((i) => {
          return i.id.id !== i.id.id;
        });
        return {genres}
      })
    })
  }
  createGenre = (newGenre) => {
    GenresService.addGenre(newGenre).then((response)=>{
      const newGenre = response.data;
      this.setState((prevState) => {
        const newGenreRef = [...prevState.genre, newGenre];

        return {
          "genres": newGenreRef
        }
      });
    });
  }
  createGenre = (newGenre) => {
    GenresService.addGenre(newGenre).then((response)=>{
      const newGenre = response.data;
      this.setState((prevState) => {
        const newGenreRef = [...prevState.genre, newGenre];

        return {
          "genres": newGenreRef
        }
      });
    });
  }
  editGenre = ((editedGenre) => {
    GenresService.editGenre(editedGenre).then((response)=>{
      const newGenre = response.data;
      this.setState((prevState) => {
        const newGenreRef = prevState.genres.filter((item)=>{

          if (item.id.id===newGenre.id.id){
            return newGenre;
          }
          return item;
        })
        return {
          "genres": newGenreRef
        }
      });
    });
  });

  createUser = (newUser) => {
    loggingService.addUser(newUser).then((response)=>{
      const newGenre = response.data;
      /*this.setState((prevState) => {
        const newGenreRef = [...prevState.genre, newGenre];

        return {
          "genres": newGenreRef
        }
      });*/
    });
  };
  createLogin = (newUser) => {
    loggingService.registerUser(newUser).then((response)=>{
      const newGenre = response;
      console.log("response", newGenre)
      /*this.setState((prevState) => {
        const newGenreRef = [...prevState.genre, newGenre];

        return {
          "genres": newGenreRef
        }
      });*/
    });
  };



  render() {
console.log("state");
console.log(this.state.totalPages);
//books
    const   books =this.state.books.map((book, index) => {
      return (
          <BookRow  title={book.title} genre={book.genre} key={index}
                    plot={book.plot}  num_editions={book.num_editions } onDelete={this.deleteBook} book_id={book.id.id} authors={book.authors}/>
      );
    });
    const handlePageClick = (e) => {
      this.loadBooks(e.selected)
    }


    const paginate = () => {
      if (this.state.totalPages !== 0) {
        return (
            <ReactPaginate previousLabel={"previous"}
                           nextLabel={"next"}
                           breakLabel={<span className="gap">...</span>}
                           breakClassName={"break-me"}
                           pageCount={this.state.totalPages}
                           marginPagesDisplayed={2}
                           pageRangeDisplayed={5}
                           pageClassName={"page-item"}
                           pageLinkClassName={"page-link"}
                           previousClassName={"page-item"}
                           nextClassName={"page-item"}
                           previousLinkClassName={"page-link"}
                           nextLinkClassName={"page-link"}
                           forcePage={this.state.page}
                           onPageChange={handlePageClick}
                           containerClassName={"pagination justify-content-center"}
                           activeClassName={"active"}/>
        )
      }
    }
//borrowings
    console.log("borrowings"+this.state.borrowings);
    const   borrowings =this.state.borrowings.map((borrowing, index) => {
      return (
          <BorrowingRow  from={borrowing.from} to={borrowing.to} key={index}
                    member={borrowing.member}  edition={borrowing.edition } onDelete={this.deleteBorrowing} borrowingId={borrowing.id.id} employee={borrowing.employee}
          active={borrowing.active} onReturn={this.returnBorrowing}/>
      );
    });
    const handlePageClickBorrowing = (e) => {
      this.loadBorrowings(e.selected)
    };


    const paginateBorrowing = () => {
      if (this.state.totalPagesBorrowings !== 0) {
        return (
            <ReactPaginate previousLabel={"previous"}
                           nextLabel={"next"}
                           breakLabel={<span className="gap">...</span>}
                           breakClassName={"break-me"}
                           pageCount={this.state.totalPagesBorrowings}
                           marginPagesDisplayed={2}
                           pageRangeDisplayed={5}
                           pageClassName={"page-item"}
                           pageLinkClassName={"page-link"}
                           previousClassName={"page-item"}
                           nextClassName={"page-item"}
                           previousLinkClassName={"page-link"}
                           nextLinkClassName={"page-link"}
                           forcePage={this.state.pageBorrowings}
                           onPageChange={handlePageClickBorrowing}
                           containerClassName={"pagination justify-content-center"}
                           activeClassName={"active"}/>
        )
      }
    };
    //penalties

    const   penalties =this.state.penalties.map((penalty, index) => {
      return (
          <PenaltyRow  givenAt={penalty.givenAt} dueDate={penalty.dueDate} key={index}
                         price={penalty.price}  paid={penalty.paid } onDelete={this.deletePenalty} penaltyId={penalty.id.id} borrowing={penalty.borrowing}
                  onPayPenalty={this.payPenalty}     />
      );
    });
    const handlePageClickPenalty = (e) => {
      this.loadPenalties(e.selected)
    };


    const paginatePenalty = () => {
      if (this.state.totalPagesPenalties !== 0) {
        return (
            <ReactPaginate previousLabel={"previous"}
                           nextLabel={"next"}
                           breakLabel={<span className="gap">...</span>}
                           breakClassName={"break-me"}
                           pageCount={this.state.totalPagesPenalties}
                           marginPagesDisplayed={2}
                           pageRangeDisplayed={5}
                           pageClassName={"page-item"}
                           pageLinkClassName={"page-link"}
                           previousClassName={"page-item"}
                           nextClassName={"page-item"}
                           previousLinkClassName={"page-link"}
                           nextLinkClassName={"page-link"}
                           forcePage={this.state.pagePenalties}
                           onPageChange={handlePageClickPenalty}
                           containerClassName={"pagination justify-content-center"}
                           activeClassName={"active"}/>
        )
      }
    }

    //authors
    const   authors =this.state.authors.map((author, index) => {
      return (
          <AuthorRow  name={author.name} date_of_birth={author.date_of_birth} key={index}
                    biography={author.biography}   onDelete={this.deleteAuthor} authorId={author.id.id} />
      );
    });
    const handlePageClickAuthors = (e) => {
      this.loadAuthors(e.selected)
    }


    const paginateAuthors = () => {
      if (this.state.totalPagesAuthors !== 0) {
        return (
            <ReactPaginate previousLabel={"previous"}
                           nextLabel={"next"}
                           breakLabel={<span className="gap">...</span>}
                           breakClassName={"break-me"}
                           pageCount={this.state.totalPagesAuthors}
                           marginPagesDisplayed={2}
                           pageRangeDisplayed={5}
                           pageClassName={"page-item"}
                           pageLinkClassName={"page-link"}
                           previousClassName={"page-item"}
                           nextClassName={"page-item"}
                           previousLinkClassName={"page-link"}
                           nextLinkClassName={"page-link"}
                           forcePage={this.state.pageAuthors}
                           onPageChange={handlePageClickAuthors}
                           containerClassName={"pagination justify-content-center"}
                           activeClassName={"active"}/>
        )
      }
    }


    //employees
    const   employees =this.state.employees.map((employee, index) => {
      return (
          <EmployeeRow ESSN={employee.id.id} name={employee.name} working_time={employee.working_time} key={index}
                      salary={employee.salary}   onDelete={this.deleteEmployee} position={employee.position}  phone={employee.phone}
          email={employee.email}/>
      );
    });
    const handlePageClickEmployees = (e) => {
      this.loadEmployees(e.selected)
    }


    const paginateEmployees = () => {
      if (this.state.totalPagesEmployees !== 0) {
        return (
            <ReactPaginate previousLabel={"previous"}
                           nextLabel={"next"}
                           breakLabel={<span className="gap">...</span>}
                           breakClassName={"break-me"}
                           pageCount={this.state.totalPagesEmployees}
                           marginPagesDisplayed={2}
                           pageRangeDisplayed={5}
                           pageClassName={"page-item"}
                           pageLinkClassName={"page-link"}
                           previousClassName={"page-item"}
                           nextClassName={"page-item"}
                           previousLinkClassName={"page-link"}
                           nextLinkClassName={"page-link"}
                           forcePage={this.state.pageEmployees}
                           onPageChange={handlePageClickEmployees}
                           containerClassName={"pagination justify-content-center"}
                           activeClassName={"active"}/>
        )
      }
    }

///////members///////////////////
    const   members =this.state.members.map((member, index) => {
      return (
          <MemberRow ESSN={member.id.id} name={member.name} membership_start={member.membership_start} key={index}
                       membership_expiration={member.membership_expiration}   onDelete={this.deleteMember}
                       email={member.email}  phone={member.phone}/>
      );
    });
    const handlePageClickMembers = (e) => {
      this.loadMembers(e.selected)
    }


    const paginateMembers = () => {
      if (this.state.totalPagesMembers !== 0) {
        return (
            <ReactPaginate previousLabel={"previous"}
                           nextLabel={"next"}
                           breakLabel={<span className="gap">...</span>}
                           breakClassName={"break-me"}
                           pageCount={this.state.totalPagesMembers}
                           marginPagesDisplayed={2}
                           pageRangeDisplayed={5}
                           pageClassName={"page-item"}
                           pageLinkClassName={"page-link"}
                           previousClassName={"page-item"}
                           nextClassName={"page-item"}
                           previousLinkClassName={"page-link"}
                           nextLinkClassName={"page-link"}
                           forcePage={this.state.pageMembers}
                           onPageChange={handlePageClickMembers}
                           containerClassName={"pagination justify-content-center"}
                           activeClassName={"active"}/>
        )
      }
    };
    //genres
    console.log("s"+this.state.genres);



    const   genres =this.state.genres.map((genre, index) => {
      console.log("genre"+genre);
      const id=genre.id.id;
      return (
          <GenreRow  title={genre.title} description={genre.description} key={index}
                    period={genre.period}   onDelete={this.deleteGenre} genre_id={id}  />
      );
    });
    const handlePageClickGenre = (e) => {
      this.loadGenres(e.selected)
    }


    const paginateGenres = () => {
      if (this.state.totalPagesGenres !== 0) {
        return (
            <ReactPaginate previousLabel={"previous"}
                           nextLabel={"next"}
                           breakLabel={<span className="gap">...</span>}
                           breakClassName={"break-me"}
                           pageCount={this.state.totalPagesGenres}
                           marginPagesDisplayed={2}
                           pageRangeDisplayed={5}
                           pageClassName={"page-item"}
                           pageLinkClassName={"page-link"}
                           previousClassName={"page-item"}
                           nextClassName={"page-item"}
                           previousLinkClassName={"page-link"}
                           nextLinkClassName={"page-link"}
                           forcePage={this.state.pageGenres}
                           onPageChange={handlePageClickGenre}
                           containerClassName={"pagination justify-content-center"}
                           activeClassName={"active"}/>
        )
      }
    }



    const routing = (
        <Router>
          <Header getUnpaid={this.loadPenaltiesTodayUnpaid}/>

          <main role="main" className="mt-3">

            <div className="container">
              <Route path={"/"} exact render={()=>
                  <div>index</div>}>

              </Route>
              <Route path="/books" exact render={()=>
                  <div className="row">
                    <h4 className="text-upper text-left">Books &nbsp; &nbsp;</h4>
                    <BooksSearch onSearch={this.searchBooks} className={"text-right"}></BooksSearch>

                    <div className="table-responsive">
                      <table className="table tr-history table-striped small">
                        <thead>
                        <tr>
                          <th scope="col">title</th>
                          <th scope="col">genre</th>
                          <th scope="col">authors</th>

                          <th scope="col">number editions</th>

                          <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {books}

                        </tbody>
                      </table>
                      {paginate()}
                    </div>
                    <button className="btn btn-outline-secondary" >
                      <span><strong><Link to={"/books/add"} >Add new book</Link></strong></span>
                    </button>



                  </div>
                  }>

              </Route>
              <Route path={"/books/add"} render={()=><CreateBook onNewTermAdded={this.createBook}/>}></Route>
              <Route path={"/index"} render={()=><BorrowingsChart data={this.state.columnsBorrowings} data1={this.state.columnsGenres} data2={this.state.columnsAuthors} />}></Route>


              <Route path="/books/:bookId/edit" render={()=>
                  <EditBook onSubmit={this.editBook}/>}>
              </Route>
              <Route path="/books/:bookId/details" render={()=>
                  <Details editions={this.state.editions} books={this.state.books}/>}>
              </Route>
              <Route path={"/editions/:bookId/add"} render={()=><CreateEdition onNewTermAdded={this.createEdition} />}></Route>


              <Redirect to={"/books"}/>
              <Redirect to={"/books/:bookId"}/>




              <Route path="/authors" exact render={()=>
                  <div className="row">
                    <h4 className="text-upper text-left">Authors &nbsp; &nbsp;</h4>
                    <AuthorsSearch onSearch={this.searchAuthors} className={"text-right"}></AuthorsSearch>

                    <div className="table-responsive">
                      <table className="table tr-history table-striped small">
                        <thead>
                        <tr>
                          <th scope="col">name</th>
                          <th scope="col">date_of_birth</th>


                          <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {authors}

                        </tbody>
                      </table>
                      {paginateAuthors()}
                    </div>
                    <button className="btn btn-outline-secondary" >
                      <span><strong><Link to={"/authors/add"} >Add new author</Link></strong></span>
                    </button>



                  </div>
              }>

              </Route>
              <Route path={"/authors/add"} render={()=><CreateAuthor onNewTermAdded={this.createAuthor}/>}></Route>

              <Route path="/authors/:authorId/edit" render={()=>
                  <EditAuthor onSubmit={this.editAuthor}/>}>
              </Route>
              <Route path="/authors/:authorId/details" render={()=>
                  <DetailsAuthor/>}>
              </Route>

              <Redirect to={"/authors"}/>





              <Route path="/employees" exact render={()=>
                  <div className="row">
                    <h4 className="text-upper text-left">Employees &nbsp; &nbsp;</h4>
                    <EmployeesSearch onSearch={this.searchEmployee} className={"text-right"}></EmployeesSearch>

                    <div className="table-responsive">
                      <table className="table tr-history table-striped small">
                        <thead>
                        <tr>
                          <th scope="col">ESSN</th>

                          <th scope="col">name</th>
                          <th scope="col">working_time</th>
                          <th scope="col">salary</th>

                          <th scope="col">position</th>
                          <th scope="col">phone</th>
                          <th scope="col">email</th>


                        </tr>
                        </thead>
                        <tbody>
                        {employees}

                        </tbody>
                      </table>
                      {paginateEmployees()}
                    </div>
                    <button className="btn btn-outline-secondary" >
                      <span><strong><Link to={"/employees/add"} >Add new employee</Link></strong></span>
                    </button>



                  </div>
              }>

              </Route>
              <Route path={"/employees/add"} render={()=><CreateEmployee onNewTermAdded={this.createEmployee}/>}></Route>

              <Route path="/employees/:employeeId/edit" render={()=>
                  <EditEmpoyee onSubmit={this.editEmployee}/>}>
              </Route>


              <Redirect to={"/employees"}/>



              <Route path="/members" exact render={()=>
                  <div className="row">
                    <h4 className="text-upper text-left">Members &nbsp; &nbsp;</h4>
                    <MemberSearch onSearch={this.searchMembers} className={"text-right"}></MemberSearch>

                    <div className="table-responsive">
                      <table className="table tr-history table-striped small">
                        <thead>
                        <tr>
                          <th scope="col">ESSN</th>

                          <th scope="col">name</th>
                          <th scope="col">membership_start</th>
                          <th scope="col">membership_expiration</th>

                          <th scope="col">email</th>
                          <th scope="col">phone</th>


                        </tr>
                        </thead>
                        <tbody>
                        {members}

                        </tbody>
                      </table>
                      {paginateMembers()}
                    </div>
                    <button className="btn btn-outline-secondary" >
                      <span><strong><Link to={"/members/add"} >Add new member</Link></strong></span>
                    </button>



                  </div>
              }>

              </Route>
              <Route path={"/members/add"} render={()=><CreateMember onNewTermAdded={this.createMember}/>}></Route>

              <Route path="/members/:memberId/edit" render={()=>
                  <EditMember onSubmit={this.editMember}/>}>
              </Route>


              <Redirect to={"/members"}/>



              <Route path="/genres" exact render={()=>
                  <div className="row">
                    <h4 className="text-upper text-left">Genres &nbsp; &nbsp;</h4>
                    <GenresSearch onSearch={this.searchGenres} className={"text-right"}></GenresSearch>
                    <div className="table-responsive">
                      <table className="table tr-history table-striped small">
                        <thead>
                        <tr>
                          <th scope="col">title</th>
                          <th scope="col">period</th>


                          <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {genres}

                        </tbody>
                      </table>
                      {paginateGenres()}
                    </div>
                    <button className="btn btn-outline-secondary" >
                      <span><strong><Link to={"/genres/add"} >Add new genre</Link></strong></span>
                    </button>



                  </div>
              }>

              </Route>
              <Route path={"/genres/add"} render={()=><CreateGenre onNewTermAdded={this.createGenre}/>}></Route>

              <Route path="/genres/:genreId/edit" render={()=>
                  <EditGenre onSubmit={this.editGenre}/>}>
              </Route>

              <Route path="/genres/:genreId/details" render={()=>
                  <DetailsGenre/>}>
              </Route>
              <Redirect to={"/genres"}/>


              <Route path="/borrowings" exact render={()=>
                  <div className="row">
                    <h4 className="text-upper text-left">Borrowings</h4>
                    <Borrowingssearch onSearch={this.searchBorrowings} className={"text-right"}></Borrowingssearch>

                    <div className="table-responsive">
                      <table className="table tr-history table-striped small">
                        <thead>
                        <tr>
                          <th scope="col">from</th>
                          <th scope="col">to</th>

                          <th>Book</th>
                          <th>Edition</th>
                          <th>Employee</th>
                          <th>Member</th>
                          <th>Active</th>

                          <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {borrowings}

                        </tbody>
                      </table>
                      {paginateBorrowing()}
                    </div>




                  </div>
              }>

              </Route>

              <Route path={"/borrowings/:editionId/add"} render={()=><CreateBorrowing onNewTermAdded={this.createBorrowing} reloadEditions={this.loadEditions}/>}></Route>



              <Redirect to={"/borrowings"}/>



              <Route path="/penalties" exact render={()=>
                  <div className="row">
                    <h4 className="text-upper text-left">Penalties</h4>
                    <PenaltySearch onSearch={this.searchPenalties} className={"text-right"}></PenaltySearch>

                    <div className="table-responsive">
                      <table className="table tr-history table-striped small">
                        <thead>
                        <tr>
                          <th scope="col">Given at</th>
                          <th scope="col">Due date</th>

                          <th>Price</th>
                          <th>Borrowing</th>
                          <th>Paid</th>


                          <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {penalties}

                        </tbody>
                      </table>
                      {paginatePenalty()}
                    </div>




                  </div>
              }>

              </Route>
              <Route path={"/penalties/:borrowingId/add"} render={()=><CreatePenalty onNewTermAdded={this.createPenalty} reloadPenalties={this.loadPenalties}/>}></Route>



              <Redirect to={"/penalties"}/>
              <Route path={"/users/signup"} render={()=><SignUp onNewTermAdded={this.createUser}/>}></Route>
              <Route path={"/users/login"} render={()=><SignIn onNewTermAdded={this.createLogin}/>}></Route>




            </div>
          </main>
        </Router>
    )

    return (

        <div className="App">
          {routing}

        </div>
    );
  }

}
export default App;
