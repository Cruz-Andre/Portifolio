using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Teste_Regex
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string alvo = "11a22b33c";
            string pattern = @"(\d\d)(\w)";

            Regex regex = new Regex(pattern);
            MatchCollection matches = regex.Matches(alvo);
            
            foreach(Match match in matches)
            {
                Console.WriteLine(match.Groups[0].Value);
                Console.WriteLine(match.Groups[1].Value);
                Console.WriteLine(match.Groups[2].Value);
                Console.WriteLine(match.Index);
                Console.WriteLine(match.Length);
            }
        }
    }
}
