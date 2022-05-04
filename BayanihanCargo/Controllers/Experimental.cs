using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BayanihanCargo.Controllers
{
    public class Experimental : Controller
    {
        [Route("Home2")]
        public IActionResult HomeExperimental()
        {
            return View();
        }

        [Route("Home3")]
        public IActionResult Simple()
        {
            return View();
        }
    }
}
