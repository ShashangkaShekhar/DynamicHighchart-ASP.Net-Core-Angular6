using System;
using System.Collections.Generic;

namespace SPACoreAngular.Web.serverapp.models
{
    public partial class UserMarks
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public decimal? Mark { get; set; }
    }
}
