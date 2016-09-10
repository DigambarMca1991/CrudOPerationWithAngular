using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace crudusingandular.Models
{
    public class Book
    {
        public int  ID{ get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string publisher { get; set; }
        public string Isbn { get; set; }

    }
}