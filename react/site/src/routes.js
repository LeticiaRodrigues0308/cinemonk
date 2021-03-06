import { BrowserRouter, Switch, Route } from 'react-router-dom';


import SelectMovie from './pages/selectMovie';
import Home from './pages/home';
import PurchaseCompleted from './pages/purchaseCompleted/index';
import ticketDate from './pages/ticketDate/index';
import LanguageMovie from './pages/languageMovie';
import Payment from './pages/payment';
import Places from './pages/places';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/select" component={SelectMovie} />
                <Route path="/ticketDate" component={ticketDate} />
                <Route path="/languageMovie" component={LanguageMovie}/>
                <Route path="/payment" component={Payment}/>
                <Route path="/places" component={Places}/>
                <Route path="/purchase-completed" component={PurchaseCompleted} />

            </Switch>
        </BrowserRouter> 
    )
}
