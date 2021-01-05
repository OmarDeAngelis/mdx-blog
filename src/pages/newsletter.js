import React from "react";
import styled from "styled-components";
// import Layout from "../components/layout/layout";
import SEO from "../components/global/SEO";
import Hero from "../components/global/Hero";
const Newsletter = () => {
  return (
    <>
      <SEO
        title="Newsletter"
        description="Iscrivi alla nostra blog newsletter, per ricerve sconti e offerte"
      />
      <Hero />
      <Wrapper>
        <section className="form-section">
          <h3>Iscriviti alla News Letter</h3>
          <form
            action="https://formspree.io/f/xbjpqjnr"
            method="POST"
            className="form-block"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Nome e Cognome"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="mail"
            ></input>

            <button type="submit" className="btn">
              Iscriviti
            </button>
          </form>
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  height: calc(90vh - 21.5rem);
  position: relative;
  background-color: var(--color-white);
  .form-section {
    position: absolute;
    top: 10%;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    text-align: center;
    display: grid;
    gap: 1rem;
  }
  .form-block {
    padding: 0.8rem;
    box-shadow: 0px 0px 4px var(--shadow);
    border-radius: var(--radius);
    width: 80%;
    margin: auto;
    display: grid;
    gap: 0.8rem;

    input {
      padding: 0.3rem;
      border-radius: var(--radius);
      border: 1px solid var(--color-gray-4);
    }
  }
  @media screen and (min-width: 992px) {
    height: calc(90vh - 18rem);

    .form-section {
      gap: 2rem;
      top: 30%;
    }
    .form-block {
      display: flex;
      gap: 0;
      padding: 0;
      width: 50%;
      input {
        height: 3rem;
        border-right: none;
        width: 100%;
      }
    }
  }
`;
export default Newsletter;
