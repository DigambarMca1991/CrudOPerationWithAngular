using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(crudusingandular.Startup))]
namespace crudusingandular
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
