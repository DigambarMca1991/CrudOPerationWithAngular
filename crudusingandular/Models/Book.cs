using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace crudusingandular.Models
{
    public class Book
    {
        
        public int  ID{ get; set; }
        [Required(ErrorMessage = "Plz Enter your Name")]
        public string Title { get; set; }
        [Required(ErrorMessage ="Plz Enter Your Author Name")]
        public string Author { get; set; }
        [Required(ErrorMessage ="Plz Enter Your Publisher ")]
        public string publisher { get; set; }
        [Required(ErrorMessage ="Plz Enter Your ISBN ")]
        public string Isbn { get; set; }

    }
}