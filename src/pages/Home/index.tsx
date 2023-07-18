
import React from 'react';
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";
import { Container, BodyContainer, HeaderContainer, HeaderContainerHighlight,HeaderTextHighlight,HeaderTitle } from './styles';

function Home() 
{
  return(

    <Container>
      <HeaderContainer>
        <CalendarStrip 
        daySelectionAnimation={{
          type: "border",
          duration: 200,
          borderWidth: 1,
          borderHighlightColor: "white",
        }}
        style={{ height: 100, paddingTop: 20, paddingBottom: 5 }}
        calendarHeaderStyle={{ color: "white", marginBottom: 15 }}
        dateNumberStyle={{ color: "white" }}
        dateNameStyle={{ color: "white" }}
        scrollable={true}
        highlightDateNumberStyle={{ color: "yellow" }}
        highlightDateNameStyle={{ color: "yellow" }}
        disabledDateNameStyle={{ color: "grey" }}
        disabledDateNumberStyle={{ color: "grey" }}
        iconContainer={{ flex: 0.1 }}
        onDateSelected={()=>null}
        startingDate={moment().subtract(3, "days")}
        selectedDate={moment()}
        scrollerPaging={true}
        iconLeft={require("../../assets/img/arrow-left.png")}
        iconRight={require("../../assets/img/arrow-right.png")} />

      </HeaderContainer>
      <BodyContainer></BodyContainer>
    </Container>
  )
}

export default Home;