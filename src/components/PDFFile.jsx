import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import Binar from "../images/img_service.png";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "gray",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "gray",
  },
});

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed></Text>
        <Image style={styles.image} src={Binar} />
        <Text style={styles.text}>
          The general objective of this research was to develop a system for Car
          Rental Business. The outcome was an outline of a car rental service
          based on a wide online access and utilization of location-based
          services. That is both acceptable by both the customers and the
          company. The Specific objectives of the study were: • To reduce the
          time consumed in applying to rent a car using scheduling algorithm; •
          To organize transaction records; and • To provide customers a
          comprehensive and detailed information of services offered by Car
          Rental business. The developed application will enable the business to
          check and verify customers booking transaction. It will help the
          system user to validate the pending transaction of the customer to
          eliminate the possibility of assigning car into multiple customers.
          This framework shows the overall outline of the study. It can be
          expressed by using the inputprocess-output (IPO), a process is viewed
          as a series of boxes (processing elements) connected by inputs and
          outputs. Information or material objects flow through a series of task
          or activities based on a set of rules or description points. What goes
          in is the input; what causes the change is the process; what comes out
          is the output. The IPO model provided the general structure and guide
          for the direction of study. Table 1 shows the conceptual framework of
          the study which the research used in the conceptualization of the
          research study. It provides the researchers necessary information’s on
          the different processes that the system will perform based on the
          input from the user. Information and Communication Technology (ICT)
          has become and will continue to be an integral part of the day-to-day
          life of every Filipino across all levels of our society. The
          occurrence of communication technology around the world necessitates
          that government get on a cohesive and coordinated strategy on how to
          prepare its citizens to survive, live and thrive in a digital world.
          (The Philippine Digital Strategy Transformation 2.0: Digital Empowered
          Nation 2011) The main objective of the paper is to have a competitive
          society where everyone has a reliable, affordable and secure
          information access in the Philippines. As stated by Charles W. Bachman
          in 1960's who invented the database management system and the concept
          of database was put in use and also began grow in commercial.
          Databases are important in businesses, especially when it comes to
          keeping of inventory. Databases can be used for controlling inventory
          as well as reducing the time, cost, and effort of inventory
          management. Controlling your inventory is essential in order to have
          good and efficient business. As reported by Lee (2006) that one
          indisputable benefit of e-commerce is its ability to reduce
          transaction costs. For consumers or buyers, this is most likely to
          take the form of lower search costs and better information on products
          and services. There could be drastic savings in production and
          delivery costs of electronic or digital goods as well. Hossain (2009)
          stated that company’s websites should have significant influence on
          sales and corporate image, and are expected to contribute to overall
          customer satisfaction. The easiest way to be reliable to the customer
          is to maintain an easy and simple image in the company’s website,
          which created positive web experience to the customer. This can be
          done by having transparent interface, rich content, easily accessible
          information and having a design that facilitates multiple audiences.
          This is simply emphasizing the importance of knowing the target
          visitors as they have different tastes in terms of color and design as
          a whole. Also, a good design is not enough to make your customers stay
          in the website; it must be informative as well especially on the
          product and services. Many businesses are now engaged with the
          implementation of information system to expedite the transaction of
          their companies. In a car rental business, a need to implement such
          system to easily manage the transaction of the business owner and its
          customer. Just like an e-commerce business, the car rental management
          system could also offer online advertisement. It is the most
          affordable way of advertising compared to some paid commercials that
          even small businesses can easily implement. E-Commerce allows
          consumers to electronically exchange goods and services with no
          barriers of time or distance. Electronic commerce has expanded rapidly
          over the past five years and is predicted to continue at this rate, or
          even accelerate (Franco & Regie, 2016, p. 7).
        </Text>
        <Text style={styles.pageNumber} render={({pageNumber, totalPages}) => `${pageNumber} / ${totalPages}`} fixed />
      </Page>
    </Document>
  );
};

export default PDFFile;
