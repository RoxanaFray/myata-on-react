import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
import Carousel from 'react-material-ui-carousel';
import MyMediaCard from './ApartmentCard';
import useWindowDimensions from './MyHooks';
import Grid from '@material-ui/core/Grid';
import MyResponsiveDialog from './dialog';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import CardMedia from '@material-ui/core/CardMedia';

import NumberFormat from 'react-number-format';

const apartments = [
   {
      title: "2-КОМНАТНАЯ КВАРТИРА",
      rooms: 2,
      area: 49.3,
   },
   {
      title: "1-КОМНАТНАЯ КВАРТИРА",
      rooms: 1,
      area: 29.2,
   },
   {
      title: "1-КОМНАТНАЯ КВАРТИРА",
      rooms: 1,
      area: 30.5,
   },
   {
      title: "3-КОМНАТНАЯ КВАРТИРА",
      rooms: 3,
      area: 63.9,
   },
   {
      title: "СТУДИЯ",
      rooms: 0,
      area: 24.1,
   },
   {
      title: "1-КОМНАТНАЯ КВАРТИРА",
      rooms: 1,
      area: 33.5,
   },
   {
      title: "1-КОМНАТНАЯ КВАРТИРА",
      rooms: 1,
      area: 30.5,
   },
   {
      title: "СТУДИЯ",
      rooms: 0,
      area: 24.3,
   },
   {
      title: "1-КОМНАТНАЯ КВАРТИРА",
      rooms: 1,
      area: 35.9,
   },
   {
      title: "1-КОМНАТНАЯ КВАРТИРА",
      rooms: 1,
      area: 36.3,
   },
   {
      title: "1-КОМНАТНАЯ КВАРТИРА",
      rooms: 1,
      area: 34.2,
   },
   {
      title: "2-КОМНАТНАЯ КВАРТИРА",
      rooms: 2,
      area: 40.1,
   },
   {
      title: "1-КОМНАТНАЯ КВАРТИРА",
      rooms: 1,
      area: 33.8,
   },
   {
      title: "1-КОМНАТНАЯ КВАРТИРА",
      rooms: 1,
      area: 36.7,
   }
]
const useStyles = makeStyles((theme) => ({
   chooseApartmentButton: {
      color: '#03bab0',
      borderColor: '#03bab0',
      marginLeft: 10,
      marginRight: 10,
      background: "white",
   },

   clickedChooseApartmentButton: {
      color: "#ffffff",
      background: "#03bab0",
      borderColor: "#ffffff",
   },
   
   apartmentDialog: {
      padding: 40,

   },
   media: {
      backgroundSize: 'contain',
      width: 400,
      height: 400
   },
   sendCallback: {
      background: "linear-gradient(90deg, #add543 0, #03bab0)",
      color: 'white',
      width: 350,
      marginTop: 15
   }
}
))

function App() {
   const { height, width } = useWindowDimensions();
   const classes = useStyles();
   let [filteredArr, updateFilteredArr] = React.useState(filterApartments("all"));
   let [apartmentCards, updateApartmentCards] = React.useState([<></>]);
   let [dialog, updateDialog] = React.useState(false);
   let [dialogContent, updateDialogContent] = React.useState(<></>);
   let [dialogTitle, updateDialogTitle] = React.useState("");

   // это state для хранения классов кнопок фильтра
   let [buttonClasses, updateButtonClasses] = React.useState(
      [classes.chooseApartmentButton,
      classes.chooseApartmentButton,
      classes.chooseApartmentButton,
      classes.chooseApartmentButton,
      classes.chooseApartmentButton]
   );


   // данные из полей ввода
   let [userData, updateUserData] = React.useState({
      name: '',
      phone: '',
   });

   // меняет стили нажатой кнопки и стили остальных кнопок
   function changeButtonClasses(currentBtnIndex) {
      const newArr = buttonClasses.map((elem, index) => {
         if (currentBtnIndex === index) {
            return classes.clickedChooseApartmentButton;
         } else {
            return classes.chooseApartmentButton;
         }
      });
      updateButtonClasses(newArr);
   }

   //эффект, который обновляет верстку карточек квартир, когда меняется выбор кол-ва комнат или 
   // ширина экрана
   useEffect(() => {
      updateApartmentCards(createApartmentCards(filteredArr));
   }, [filteredArr, width, userData]);

   function createApartmentCards(filteredArr) {
      let result = [];
      // создание массива разнится в зависимости от ширины экрана
      if (width <= 1050) {
         filteredArr.forEach((elem) => {
            const title = elem.title;
            const rooms = elem.rooms;
            const area = elem.area;

            result.push(
               <MyMediaCard
                  title={title}
                  rooms={rooms}
                  area={area}
                  cardClass='lonelyCard'
                  onClick={() => {
                     updateDialog(true);
                     updateDialogTitle(title)
                     updateDialogContent(
                        <div className="dialogWindow">

                           <CardMedia
                              className={classes.media}
                              image="/img/plans/et-2-5_kv-01.png"
                           />

                           <div className="textDialogContent">
                              <table className="apartmentDialogInfoTable">
                                 <tr>
                                 <td>КОЛИЧЕСТВО КОМНАТ</td>
                                 <td>{rooms < 1 ? 1 : rooms}</td>
                                 </tr>
                                 <tr>
                                 <td>ОБЩАЯ ПЛОЩАДЬ</td>
                                 <td>{area} м<sup>2</sup></td>
                                 </tr>
                                 <tr>
                                 <td>БАЛКОН</td>
                                 <td>ЕСТЬ</td>
                                 </tr>
                              </table>


                              <div>ЗАПИШИТЕСЬ НА ПРОСМОТР</div>
                           
                              <div className="dialogForm">
                                 <TextField
                                    id="client-name"
                                    size="small"
                                    label="Имя"
                                    variant="outlined"
                                    InputProps={{
                                       startAdornment: (
                                          <InputAdornment position="start">
                                             <AccountCircle />
                                          </InputAdornment>
                                       ),
                                    }}
                                    onChange={(event) => {
                                       const newName = event.target.value;
                                       updateUserData((prevData) => {
                                          return ({
                                             ...prevData,
                                             name: newName
                                          })
                                       })
                                    }}
                                 />
                                 <NumberFormat
                                    type="tel"
                                    format="+7 (###) ### ## ##"
                                    size="small"
                                    allowEmptyFormatting
                                    mask="_"
                                    customInput={TextField}


                                    // material-ui props
                                    id="phone"
                                    variant="outlined"
                                    label="Номер телефона"
                                    onChange={(event) => {
                                       const newPhone = event.target.value;
                                       updateUserData((prevData) => {
                                          return ({
                                             ...prevData,
                                             phone: newPhone
                                          })
                                       })
                                    }}
                                    InputProps={{
                                       startAdornment: (
                                          <InputAdornment position="start">
                                             <PhoneIcon />
                                          </InputAdornment>
                                       ),
                                    }}
                                 />
                                 <div>
                                    <Button
                                       size="large"
                                       className={classes.sendCallback}
                                       variant="contained"
                                       onClick={() => console.log(userData)}
                                    >
                                       Отправить
                                    </Button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     );
                  }}
               />
            );
         })
      } else if (width > 1050) {
         // для ПК
         result = [[]];
         filteredArr.forEach((elem, index) => {
            const title = elem.title;
            const rooms = elem.rooms;
            const area = elem.area;

            result[result.length - 1].push(
               <MyMediaCard
                  title={elem.title}
                  rooms={elem.rooms}
                  area={elem.area}
                  cardClass='threeCards'
                  onClick={() => {
                     updateDialog(true);
                     updateDialogTitle(elem.title)
                     updateDialogContent(
                        <div className="dialogWindow">

                        
                        <CardMedia
                           className={classes.media}
                           image="/img/plans/et-2-5_kv-01.png"
                        />

                        <div className="textDialogContent">
                        <table className="apartmentDialogInfoTable">
                           <tr>
                              <td>КОЛИЧЕСТВО КОМНАТ</td>
                              <td>{rooms < 1 ? 1 : rooms}</td>
                           </tr>
                           <tr>
                              <td>ОБЩАЯ ПЛОЩАДЬ</td>
                              <td>{area} м<sup>2</sup></td>
                           </tr>
                           <tr>
                              <td>БАЛКОН</td>
                              <td>ЕСТЬ</td>
                           </tr>
                        </table>



                       

                        <div className="cardFormTitle">ЗАПИШИТЕСЬ НА ПРОСМОТР</div>
                        <div className="dialogForm">
                                 <TextField
                                    id="client-name"
                                    size="small"
                                    label="Имя"
                                    variant="outlined"
                                    InputProps={{
                                       startAdornment: (
                                          <InputAdornment position="start">
                                             <AccountCircle />
                                          </InputAdornment>
                                       ),
                                    }}
                                    onChange={(event) => {
                                       const newName = event.target.value;
                                       updateUserData((prevData) => {
                                          return ({
                                             ...prevData,
                                             name: newName
                                          })
                                       })
                                    }}
                                 />
                                 <NumberFormat
                                    type="tel"
                                    size="small"
                                    format="+7 (###) ### ## ##"
                                    allowEmptyFormatting
                                    mask="_"
                                    customInput={TextField}


                                    // material-ui props
                                    id="phone"
                                    variant="outlined"
                                    label="Номер телефона"
                                    onChange={(event) => {
                                       const newPhone = event.target.value;
                                       updateUserData((prevData) => {
                                          return ({
                                             ...prevData,
                                             phone: newPhone
                                          })
                                       })
                                    }}
                                    InputProps={{
                                       startAdornment: (
                                          <InputAdornment position="start">
                                             <PhoneIcon />
                                          </InputAdornment>
                                       ),
                                    }}
                                 />
                                 <div>
                                    <Button
                                       size="large"
                                       className={classes.sendCallback}
                                       variant="contained"
                                       onClick={() => console.log(userData)}
                                    >
                                       Отправить
                                    </Button>
                                 </div>
                              </div>
                           </div>
                     </div>
                     );
                  }}
               />
            )
            if ((index + 1) % 3 === 0 && index != filteredArr.length - 1) {
               result.push([])
            };
         });


         result = result.map((elem, index) => {
            return (
               <Grid
                  key={index}
                  container
                  direction="row"
                  justify="center"
                  className="cardsGrid"
                  alignItems="flex-end"
               >
                  {elem}
               </Grid>
            );
         })
      };
      return result;
   }
   function filterApartments(rooms) {
      let filtered = [];
      if (rooms === "all") {
         filtered = apartments;
      } else {
         filtered = apartments.filter((elem) => {
            if (elem.rooms === rooms) {
               return true
            } else {
               return false;
            }
         });
      };
      return filtered;
   }
   return (
      <div className="">
         <div className="chooseApartmentButtonLine">
         <Button
            className={buttonClasses[0]}
            variant="outlined"
            onClick={() => {
               updateFilteredArr(filterApartments(0));
               changeButtonClasses(0)
            }}
         >
            Студии
         </Button>
         <Button
            className={buttonClasses[1]}
            variant="outlined"
            onClick={() => {
               updateFilteredArr(filterApartments(1))
               changeButtonClasses(1)
            }}
         >
            1-комнатные
         </Button>
         <Button
            className={buttonClasses[2]}
            variant="outlined"
            onClick={() => {
               updateFilteredArr(filterApartments(2))
               changeButtonClasses(2)
            }}
         >
            2-комнатные
         </Button>
         <Button
            className={buttonClasses[3]}
            variant="outlined"
            onClick={() => {
               updateFilteredArr(filterApartments(3))
               changeButtonClasses(3)
            }}
         >
            3-комнатные
         </Button>
         <Button
            className={buttonClasses[4]}
            variant="outlined"
            onClick={() => {
               updateFilteredArr(filterApartments("all"))
               changeButtonClasses(4)
            }}
         >
            Все
         </Button>
         </div>
         <Carousel
            autoPlay={false}
            navButtonsAlwaysVisible={true}
         >
            {apartmentCards}
         </Carousel>
         <MyResponsiveDialog
            open={dialog}
            onClose={() => {
               updateDialog(false)
            }}
            onSend={() => { }}
            content={dialogContent}
            title={dialogTitle}
         //classes={classes.ApartmentDialog}
         ></MyResponsiveDialog>
         <Button
            size="large"
            className={classes.chooseApartmentButton}
            variant="contained"
            onClick={() => {
               alert(userData.name, userData.phone)
            }}
         >
            Отправить
                              </Button>
      </div>
   );
};

export default App;
