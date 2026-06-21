# Compass

> A RAG powered support engineering copilot that analyzes customer conversations, retrieves relevant context from documentation and historical tickets, and helps engineers resolve issues faster.

## Overview

Support and solution engineers often spend a significant amount of time searching through documentation, historical tickets, release notes, and internal discussions before identifying the correct solution.

Compass uses Retrieval-Augmented Generation (RAG) to understand customer queries, retrieve relevant context from multiple knowledge sources, and surface the most useful information needed to investigate and resolve issues.

## Key Features

* Analyze customer queries and support threads
* Generate intelligent search queries from customer context
* Search product documentation
* Search historical support tickets
* Retrieve and rank relevant knowledge
* Summarize findings from multiple sources
* Generate suggested responses
* RAG-powered contextual retrieval and reasoning

## How It Works

```text
Customer Query
       ↓
Intent Analysis
       ↓
Search Query Generation
       ↓
Documentation Search
Historical Ticket Search
       ↓
Context Retrieval
       ↓
LLM Reasoning
       ↓
Suggested Resolution
```

## Architecture

```text
Frontend (React)
       ↓
Backend (Node.js + Express)
       ↓
Retrieval Layer
 ├── Documentation Search
 └── Historical Ticket Search
       ↓
Ollama + Qwen
       ↓
Response Generation
```

## Tech Stack

### Frontend

* React
* Vite

### Backend

* Node.js
* Express

### AI / RAG

* Ollama
* Qwen 3
* Retrieval-Augmented Generation (RAG)

### Storage

* SQLite

## Data Sources

### Documentation

* Product Documentation
* Knowledge Base Articles

### Historical Knowledge

* Historical Support Tickets
* Previously Resolved Issues

## Project Goals

* Reduce investigation time
* Improve discoverability of existing solutions
* Minimize duplicate troubleshooting efforts
* Improve response quality and consistency
* Accelerate issue resolution for support teams

## Roadmap

### Phase 1

* [ ] React frontend
* [ ] Express backend
* [ ] Documentation search integration
* [ ] Customer thread analysis

### Phase 2

* [ ] Historical ticket ingestion
* [ ] SQLite integration
* [ ] Cross-source retrieval

### Phase 3

* [ ] Ollama integration
* [ ] Context-aware summarization
* [ ] Suggested customer responses

### Phase 4

* [ ] Historical conversation memory
* [ ] Saved investigations
* [ ] Retrieval quality improvements

## Status

🚧 Work in Progress

**Started:** 21 June 2026

## Vision

Compass aims to become a dedicated support engineering copilot that helps engineers navigate complex customer issues by combining AI reasoning with organizational knowledge and historical context.
