--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4
-- Dumped by pg_dump version 16.0

-- Started on 2024-09-04 18:48:57 -03

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

--
-- TOC entry 2 (class 3079 OID 40961)
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- TOC entry 3450 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 222 (class 1259 OID 41226)
-- Name: interviewed; Type: TABLE; Schema: public; Owner: einstein-db
--

CREATE TABLE public.interviewed (
    interviewed_id integer NOT NULL,
    respondent_email character varying(255),
    public_group integer,
    stars integer,
    CONSTRAINT interviewed_stars_check CHECK (((stars >= 1) AND (stars <= 5)))
);


ALTER TABLE public.interviewed OWNER TO "einstein-db";

--
-- TOC entry 221 (class 1259 OID 41225)
-- Name: interviewed_interviewed_id_seq; Type: SEQUENCE; Schema: public; Owner: einstein-db
--

CREATE SEQUENCE public.interviewed_interviewed_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.interviewed_interviewed_id_seq OWNER TO "einstein-db";

--
-- TOC entry 3451 (class 0 OID 0)
-- Dependencies: 221
-- Name: interviewed_interviewed_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: einstein-db
--

ALTER SEQUENCE public.interviewed_interviewed_id_seq OWNED BY public.interviewed.interviewed_id;


--
-- TOC entry 219 (class 1259 OID 41202)
-- Name: questions; Type: TABLE; Schema: public; Owner: einstein-db
--

CREATE TABLE public.questions (
    question_id integer NOT NULL,
    question_text text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.questions OWNER TO "einstein-db";

--
-- TOC entry 218 (class 1259 OID 41201)
-- Name: questions_question_id_seq; Type: SEQUENCE; Schema: public; Owner: einstein-db
--

CREATE SEQUENCE public.questions_question_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.questions_question_id_seq OWNER TO "einstein-db";

--
-- TOC entry 3452 (class 0 OID 0)
-- Dependencies: 218
-- Name: questions_question_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: einstein-db
--

ALTER SEQUENCE public.questions_question_id_seq OWNED BY public.questions.question_id;


--
-- TOC entry 217 (class 1259 OID 41193)
-- Name: researches; Type: TABLE; Schema: public; Owner: einstein-db
--

CREATE TABLE public.researches (
    research_id integer NOT NULL,
    title character varying(255),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.researches OWNER TO "einstein-db";

--
-- TOC entry 220 (class 1259 OID 41212)
-- Name: researches_questions; Type: TABLE; Schema: public; Owner: einstein-db
--

CREATE TABLE public.researches_questions (
    research_id integer,
    question_id integer
);


ALTER TABLE public.researches_questions OWNER TO "einstein-db";

--
-- TOC entry 216 (class 1259 OID 41192)
-- Name: researches_research_id_seq; Type: SEQUENCE; Schema: public; Owner: einstein-db
--

CREATE SEQUENCE public.researches_research_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.researches_research_id_seq OWNER TO "einstein-db";

--
-- TOC entry 3453 (class 0 OID 0)
-- Dependencies: 216
-- Name: researches_research_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: einstein-db
--

ALTER SEQUENCE public.researches_research_id_seq OWNED BY public.researches.research_id;


--
-- TOC entry 223 (class 1259 OID 41233)
-- Name: response_questions_interviewed; Type: TABLE; Schema: public; Owner: einstein-db
--

CREATE TABLE public.response_questions_interviewed (
    interviewed_id integer,
    research_id integer,
    question_id integer,
    answer text
);


ALTER TABLE public.response_questions_interviewed OWNER TO "einstein-db";

--
-- TOC entry 3281 (class 2604 OID 41229)
-- Name: interviewed interviewed_id; Type: DEFAULT; Schema: public; Owner: einstein-db
--

ALTER TABLE ONLY public.interviewed ALTER COLUMN interviewed_id SET DEFAULT nextval('public.interviewed_interviewed_id_seq'::regclass);


--
-- TOC entry 3278 (class 2604 OID 41205)
-- Name: questions question_id; Type: DEFAULT; Schema: public; Owner: einstein-db
--

ALTER TABLE ONLY public.questions ALTER COLUMN question_id SET DEFAULT nextval('public.questions_question_id_seq'::regclass);


--
-- TOC entry 3275 (class 2604 OID 41196)
-- Name: researches research_id; Type: DEFAULT; Schema: public; Owner: einstein-db
--

ALTER TABLE ONLY public.researches ALTER COLUMN research_id SET DEFAULT nextval('public.researches_research_id_seq'::regclass);


--
-- TOC entry 3443 (class 0 OID 41226)
-- Dependencies: 222
-- Data for Name: interviewed; Type: TABLE DATA; Schema: public; Owner: einstein-db
--

COPY public.interviewed (interviewed_id, respondent_email, public_group, stars) FROM stdin;
2	teste@teste.com	1	3
3	teste@teste.com	1	3
4	teste@teste.com	1	3
5	teste@teste.com	1	3
6	teste@teste.com	1	3
7	teste@teste.com	1	3
8	teste@teste.com	1	3
9	teste@teste.com	1	3
10	teste@teste.com	1	3
11	teste@teste.com	1	3
12	teste@teste.com	1	3
13	teste@teste.com	1	3
14	teste@teste.com	1	3
15	teste@teste.com	1	3
16	teste@teste.com	1	3
17	teste@teste.com	1	3
1	teste@reere.com	1	3
\.


--
-- TOC entry 3440 (class 0 OID 41202)
-- Dependencies: 219
-- Data for Name: questions; Type: TABLE DATA; Schema: public; Owner: einstein-db
--

COPY public.questions (question_id, question_text, created_at, updated_at) FROM stdin;
1	Para testar1	2024-09-04 17:03:49.724077	2024-09-04 17:03:49.724077
2	Para testar2	2024-09-04 17:03:53.495496	2024-09-04 17:03:53.495496
3	Para testar3	2024-09-04 17:03:56.290146	2024-09-04 17:03:56.290146
4	Para testar4	2024-09-04 17:03:59.150358	2024-09-04 17:03:59.150358
5	\N	2024-09-04 20:46:48.747818	2024-09-04 20:46:48.747818
\.


--
-- TOC entry 3438 (class 0 OID 41193)
-- Dependencies: 217
-- Data for Name: researches; Type: TABLE DATA; Schema: public; Owner: einstein-db
--

COPY public.researches (research_id, title, created_at, updated_at) FROM stdin;
2	\N	2024-09-04 17:58:18.764637	2024-09-04 17:58:18.764637
\.


--
-- TOC entry 3441 (class 0 OID 41212)
-- Dependencies: 220
-- Data for Name: researches_questions; Type: TABLE DATA; Schema: public; Owner: einstein-db
--

COPY public.researches_questions (research_id, question_id) FROM stdin;
2	1
2	2
2	3
\.


--
-- TOC entry 3444 (class 0 OID 41233)
-- Dependencies: 223
-- Data for Name: response_questions_interviewed; Type: TABLE DATA; Schema: public; Owner: einstein-db
--

COPY public.response_questions_interviewed (interviewed_id, research_id, question_id, answer) FROM stdin;
17	2	1	resposta
1	2	1	resposta
1	2	2	resposta
\.


--
-- TOC entry 3454 (class 0 OID 0)
-- Dependencies: 221
-- Name: interviewed_interviewed_id_seq; Type: SEQUENCE SET; Schema: public; Owner: einstein-db
--

SELECT pg_catalog.setval('public.interviewed_interviewed_id_seq', 17, true);


--
-- TOC entry 3455 (class 0 OID 0)
-- Dependencies: 218
-- Name: questions_question_id_seq; Type: SEQUENCE SET; Schema: public; Owner: einstein-db
--

SELECT pg_catalog.setval('public.questions_question_id_seq', 5, true);


--
-- TOC entry 3456 (class 0 OID 0)
-- Dependencies: 216
-- Name: researches_research_id_seq; Type: SEQUENCE SET; Schema: public; Owner: einstein-db
--

SELECT pg_catalog.setval('public.researches_research_id_seq', 2, true);


--
-- TOC entry 3288 (class 2606 OID 41232)
-- Name: interviewed interviewed_pkey; Type: CONSTRAINT; Schema: public; Owner: einstein-db
--

ALTER TABLE ONLY public.interviewed
    ADD CONSTRAINT interviewed_pkey PRIMARY KEY (interviewed_id);


--
-- TOC entry 3286 (class 2606 OID 41211)
-- Name: questions questions_pkey; Type: CONSTRAINT; Schema: public; Owner: einstein-db
--

ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_pkey PRIMARY KEY (question_id);


--
-- TOC entry 3284 (class 2606 OID 41200)
-- Name: researches researches_pkey; Type: CONSTRAINT; Schema: public; Owner: einstein-db
--

ALTER TABLE ONLY public.researches
    ADD CONSTRAINT researches_pkey PRIMARY KEY (research_id);


--
-- TOC entry 3289 (class 2606 OID 41220)
-- Name: researches_questions researches_questions_question_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: einstein-db
--

ALTER TABLE ONLY public.researches_questions
    ADD CONSTRAINT researches_questions_question_id_fkey FOREIGN KEY (question_id) REFERENCES public.questions(question_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3290 (class 2606 OID 41215)
-- Name: researches_questions researches_questions_research_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: einstein-db
--

ALTER TABLE ONLY public.researches_questions
    ADD CONSTRAINT researches_questions_research_id_fkey FOREIGN KEY (research_id) REFERENCES public.researches(research_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3291 (class 2606 OID 41238)
-- Name: response_questions_interviewed response_questions_interviewed_interviewed_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: einstein-db
--

ALTER TABLE ONLY public.response_questions_interviewed
    ADD CONSTRAINT response_questions_interviewed_interviewed_id_fkey FOREIGN KEY (interviewed_id) REFERENCES public.interviewed(interviewed_id) ON DELETE CASCADE;


--
-- TOC entry 3292 (class 2606 OID 41248)
-- Name: response_questions_interviewed response_questions_interviewed_question_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: einstein-db
--

ALTER TABLE ONLY public.response_questions_interviewed
    ADD CONSTRAINT response_questions_interviewed_question_id_fkey FOREIGN KEY (question_id) REFERENCES public.questions(question_id) ON DELETE CASCADE;


--
-- TOC entry 3293 (class 2606 OID 41243)
-- Name: response_questions_interviewed response_questions_interviewed_research_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: einstein-db
--

ALTER TABLE ONLY public.response_questions_interviewed
    ADD CONSTRAINT response_questions_interviewed_research_id_fkey FOREIGN KEY (research_id) REFERENCES public.researches(research_id) ON DELETE CASCADE;


-- Completed on 2024-09-04 18:48:57 -03

--
-- PostgreSQL database dump complete
--

