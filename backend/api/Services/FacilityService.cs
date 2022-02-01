using api.Context;
using api.Models;

using Microsoft.EntityFrameworkCore;

namespace api.Services
{
    public class FacilityService
    {
        private readonly DcdDbContext _context;

        public FacilityService(DcdDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Surf> GetSurfsForProject(Guid projectId)
        {
            if (_context.Surfs != null)
            {
                return _context.Surfs
                        .Include(c => c.CostProfile)
                            .ThenInclude(c => c.YearValues)
                    .Where(c => c.Project.Id.Equals(projectId));
            }
            else
            {
                return new List<Surf>();
            }
        }
    }
}
