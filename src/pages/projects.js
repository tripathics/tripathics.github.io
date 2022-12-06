const Projects = () => {
  return (
    <div className="projects-component">
      <header className="head-container">
        <h1 id="section-p0" className="title"><a href="#section-p0">Projects</a></h1>
      </header>

      <section className="container">
        <article className="proj">
          <hr />
          <div className="clipart">
            <img src="./static/media/typing-game.png" alt="Typewriter clipart" />
          </div>
          <div className="text">
            <h2><a href="https://tripathics.github.io/typing-game" target="_blank" rel="noreferrer">Typing Game</a></h2>
            <p>A simple web app made out of HTML, CSS and JavaScript. It is compatible with most modern browsers on both desktop and mobiles. It works mainly on events. JQuery Get is used for getting the quotes from <a href="https://github.com/lukePeavey/quotable">Quotable API</a> which the user types.</p>
            <p><a href="https://github.com/tripathics/typing-game" target="_blank" rel="noreferrer">View source</a></p>
          </div>
        </article>

        <article className="proj">
          <hr />
          <div className="clipart">
            <img src="./static/media/dna.png" alt="DNA clipart" />
          </div>
          <div className="text">
            <h2><a href="https://github.com/tripathics/projects/tree/main/dna" target="_blank" rel="noreferrer">dna.py</a></h2>
            <p>A Python CLI program using which we can identify a person from the database given their DNA sequence. It works by counting the <a href="https://en.wikipedia.org/wiki/STR_analysis">STRs (Short Tandem Repeats)</a> in the person's DNA sequence and searches for it in a csv database.</p>
            <p><a href="https://github.com/tripathics/projects/tree/main/dna" target="_blank" rel="noreferrer">View source</a></p>
          </div>
        </article>

        <article className="proj">
          <hr />
          <div className="clipart">
            <img src="./static/media/loanenq.png" alt="Loan eligible verification clipart" />
          </div>
          <div className="text">
            <h2><a href="https://github.com/tripathics/projects/tree/main/LoanEnq" target="_blank" rel="noreferrer">Loan Enquiry System</a></h2>
            <p>A Java CLI program which tells if you are eligible for a loan by checking the background of the user. The user is given questions which they have to answer in order to know if they are eligible or not.</p>
            <p><a href="https://github.com/tripathics/projects/tree/main/LoanEnq" target="_blank" rel="noreferrer">View source</a></p>
          </div>
        </article>

        <article className="proj">
          <hr />
          <div className="clipart">
            <img src="./static/media/todo.png" alt="Todo list clipart" />
          </div>
          <div className="text">
            <h2><a href="https://github.com/tripathics/projects/tree/main/todo_list" target="_blank" rel="noreferrer">Todo List</a></h2>
            <p>A CLI program written in Python to create and manage a todo list. This was my first program in which I used Object Oriented Programming concepts. The list is created in a csv database.</p>
            <p><a href="https://github.com/tripathics/projects/tree/main/todo_list" target="_blank" rel="noreferrer">View source</a></p>
          </div>
        </article>

        <article className="proj">
          <hr />
          <div className="clipart">
            <img src="./static/media/filter.png" alt="Sliders clipart" />
          </div>
          <div className="text">
            <h2><a href="https://github.com/tripathics/projects/tree/main/filter_more" target="_blank" rel="noreferrer">Filter</a></h2>
            <p>A CLI program written in C to apply filters to a <a href="https://en.wikipedia.org/wiki/Bitmap">bitmap image</a>. I used the bitmap file headers from <a href="http://msdn.microsoft.com/en-us/library/cc230309.aspx">microsoft msdn</a>. The program applies grayscale, blur and edge filters to the input BMP image.</p>
            <p><a href="https://github.com/tripathics/projects/tree/main/filter_more" target="_blank" rel="noreferrer">View source</a></p>
          </div>
        </article>

        <article className="proj">
          <hr />
          <div className="clipart">
            <img src="./static/media/speller.png" alt="Alphabets clipart" />
          </div>
          <div className="text">
            <h2><a href="https://github.com/tripathics/projects/tree/main/speller" target="_blank" rel="noreferrer">Speller</a></h2>
            <p>A CLI program written in C which checks for incorrectly spelled words in a .txt file. It uses a hash function to store words from an ASCII text based database into a hash table. It later compares these words to check the wrong words.</p>
            <p><a href="https://github.com/tripathics/projects/tree/main/speller" target="_blank" rel="noreferrer">View source</a></p>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Projects