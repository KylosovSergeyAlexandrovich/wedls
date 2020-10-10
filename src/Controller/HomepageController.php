<?php
/**
 * Created by PhpStorm.
 * User: Ares
 * Date: 07.10.2020
 * Time: 18:44
 */
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;


class HomepageController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index() {

        $num = random_int(0,100);

        return $this->render('homepage/index.html.twig', [
            'num' => $num,
        ]);

    }

}