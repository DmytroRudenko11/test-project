'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const sql = `
      SET statement_timeout = 0;
      SET lock_timeout = 0;
      SET idle_in_transaction_session_timeout = 0;
      SET client_encoding = 'UTF8';
      SET standard_conforming_strings = on;
      SELECT pg_catalog.set_config('search_path', '', false);
      SET check_function_bodies = false;
      SET xmloption = content;
      SET client_min_messages = warning;
      SET row_security = off;
      SET default_tablespace = '';
      SET default_table_access_method = heap;
      CREATE TABLE public."Posts" (
          "postId" uuid NOT NULL,
          "userId" uuid,
          content character varying(255) DEFAULT 'here should be your post'::character varying NOT NULL,
          "createdAt" timestamp with time zone NOT NULL,
          "updatedAt" timestamp with time zone NOT NULL
      );
      CREATE TABLE public."Users" (
          id uuid NOT NULL,
          "firstName" character varying(255) DEFAULT 'John'::character varying NOT NULL,
          "lastName" character varying(255) DEFAULT 'Doe'::character varying NOT NULL,
          "phoneNumber" character varying(255) NOT NULL,
          "createdAt" timestamp with time zone NOT NULL,
          "updatedAt" timestamp with time zone NOT NULL
      );
      ALTER TABLE ONLY public."Posts"
          ADD CONSTRAINT "Posts_pkey" PRIMARY KEY ("postId");
      ALTER TABLE ONLY public."Users"
          ADD CONSTRAINT "Users_phoneNumber_key" UNIQUE ("phoneNumber");
      ALTER TABLE ONLY public."Users"
          ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);
      CREATE INDEX users_first_name ON public."Users" USING btree ("firstName");
      CREATE INDEX users_last_name ON public."Users" USING btree ("lastName");
      ALTER TABLE ONLY public."Posts"
          ADD CONSTRAINT "Posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;
    `;

    return await queryInterface.sequelize.query(sql);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
    await queryInterface.dropTable('Users');
  }
};

