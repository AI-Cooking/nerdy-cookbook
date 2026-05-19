# Project Context

## Stack
**Next.js** (id: `nextjs`)

## Reasoning
Next.js is beginner-friendly with great built-in routing and server-side rendering, making search and filtering fast and easy to implement. It also integrates well with simple databases like Supabase for storing community-submitted recipes.

## Architecture
- Next.js 15 App Router for pages (home, recipe list, recipe detail, submit recipe)
- Supabase (free tier) as the database and auth backend for storing recipes and user submissions
- Search & filter by fandom (Harry Potter, LOTR, etc.) using Supabase queries
- Tailwind CSS for a fun, themed UI

## Description
A public community cookbook featuring recipes from fantasy and pop culture universes, with search and filter by fandom.

## Wizard Conversation
**You:** Ich möchte ein Kochbuch das nerdy Rezepte von Harry Potter, Herr der Ringe, game of thrones, Pokemon, usw hat

**Advisor:** Das klingt nach einem coolen Projekt! 🧙‍♂️⚔️

Who are the users of this app — just you personally, or do you want to share it publicly so others can browse and maybe add recipes too?

**You:** share publicly and user cloud maybe add reciepes would be nice

**Advisor:** Great idea — a community cookbook! 🍲✨

What is your experience level with coding? (e.g. beginner, some experience with HTML/CSS/JS, or experienced with frameworks like React or Vue?)

**You:** beginner

**Advisor:** Got it! One last question — do you need any special features like real-time updates, search/filtering by fandom, or is a simple browse-and-submit experience enough for now?

**You:** a sreach/fliter would be nice

**Advisor:** Perfect, that gives me everything I need! Here's my recommendation for your Nerdy Cookbook app: