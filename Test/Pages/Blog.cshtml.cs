using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Test.Pages
{
    public class BlogModel : PageModel
    {
        public string Message { get; set; }

        public void OnGet()
        {
            Message = "This is still a work in progress... Stay tuned!";
        }
    }
}
